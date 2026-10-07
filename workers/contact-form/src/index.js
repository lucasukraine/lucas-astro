// workers/contact-form/src/index.js
//
// Серверний обробник контактних форм lucasua.com та saftconnector.com.
// POST /submit — валідує запит (Origin, Turnstile, honeypot, час заповнення,
// спам-фільтри) і надсилає лист через EmailJS REST API. GET /status показує,
// чи налаштовані секрети (без їхніх значень).
//
// site_name визначається СЕРВЕРОМ за Origin запиту — клієнт його не передає
// і не може підмінити.

const SITE_CONFIG = {
  'https://lucasua.com': { site_name: 'LUCAS' },
  'https://www.lucasua.com': { site_name: 'LUCAS' },
  'https://saftconnector.com': { site_name: 'SAF-T Connector' },
  'https://www.saftconnector.com': { site_name: 'SAF-T Connector' },
};

// Перенесено 1:1 зі старого клієнтського коду (src/components/Contact.astro).
const BLOCKED_DOMAINS = [
  'jmailservice.com', 'mailservice.com', 'yopmail.com',
  'guerrillamail.com', 'tempmail.com', 'throwaway.email', 'maildrop.cc',
  'sharklasers.com', 'spam4.me', 'trashmail.com', 'dispostable.com',
];

const SPAM_PHRASES = [
  'appear first', 'rank higher', 'rank #1',
  'first page of google', 'increase your traffic', 'increase traffic',
  'search engine optimization service', 'guaranteed clicks', 'buy backlinks',
  'link building service', 'would you take that spot',
];

const FIELD_LIMITS = { name: 120, email: 180, phone: 40, message: 4000 };
const MIN_FILL_TIME_MS = 5000;

const EMAILJS_SERVICE_ID = 'service_ocdfpq8';
const EMAILJS_TEMPLATE_ID = 'template_wz7w36q';
const EMAILJS_PUBLIC_KEY = 'iY16Y2CF5ffzdZCbh';
const EMAILJS_SEND_URL = 'https://api.emailjs.com/api/v1.0/email/send';
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

function isValidName(v) { return v.trim().length >= 2; }
function isValidEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); }
function isValidPhone(v) { return /^[+]?[\d\s\-()]{7,20}$/.test(v.trim()); }
function isValidMessage(v) { return v.trim().length >= 5; }
function containsUrl(v) { return /https?:\/\/|www\./i.test(v); }

function isBlockedDomain(email) {
  const parts = email.split('@');
  return parts.length === 2 && BLOCKED_DOMAINS.includes(parts[1].toLowerCase());
}
function hasSpamPhrases(text) {
  const lower = text.toLowerCase();
  return SPAM_PHRASES.some((phrase) => lower.includes(phrase));
}

function corsHeaders(origin) {
  const headers = {
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
  if (origin && SITE_CONFIG[origin]) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}

async function parseBody(request) {
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return request.json();
  }
  const form = await request.formData();
  const out = {};
  for (const [key, value] of form.entries()) out[key] = value;
  return out;
}

async function verifyTurnstile(token, secret, ip) {
  if (!token) return false;
  const body = new FormData();
  body.append('secret', secret);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);
  const res = await fetch(TURNSTILE_VERIFY_URL, { method: 'POST', body });
  if (!res.ok) return false;
  const data = await res.json();
  return data.success === true;
}

async function sendViaEmailJS(templateParams, privateKey) {
  const res = await fetch(EMAILJS_SEND_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      accessToken: privateKey,
      template_params: templateParams,
    }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`EmailJS ${res.status}: ${text.slice(0, 300)}`);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin');

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (url.pathname === '/status' && request.method === 'GET') {
      const ready = Boolean(env.TURNSTILE_SECRET) && Boolean(env.EMAILJS_PRIVATE_KEY);
      return json({ ready }, 200, origin);
    }

    if (url.pathname !== '/submit' || request.method !== 'POST') {
      return json({ ok: false, error: 'not_found' }, 404, origin);
    }

    // Origin allowlist. CORS у браузері й так заблокує читання відповіді з
    // чужого origin, але запит можна надіслати й поза браузером (curl/скрипт),
    // тому перевірка на сервері обов'язкова.
    const siteConfig = origin ? SITE_CONFIG[origin] : null;
    if (!siteConfig) {
      return json({ ok: false, error: 'forbidden_origin' }, 403, origin);
    }

    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';

    if (env.RATE_LIMITER) {
      const { success } = await env.RATE_LIMITER.limit({ key: ip });
      if (!success) {
        return json({ ok: false, error: 'rate_limited' }, 429, origin);
      }
    }

    let body;
    try {
      body = await parseBody(request);
    } catch {
      return json({ ok: false, error: 'invalid_body' }, 400, origin);
    }

    // Honeypot — боту відповідаємо успіхом, нічого фактично не надсилаючи.
    if (body.website) {
      return json({ ok: true }, 200, origin);
    }

    // Мінімальний час від відкриття форми до відправки (боти заповнюють миттєво).
    const openedAt = Number(body.openedAt || 0);
    if (openedAt && Date.now() - openedAt < MIN_FILL_TIME_MS) {
      return json({ ok: true }, 200, origin);
    }

    const name = String(body.name || '');
    const email = String(body.email || '');
    const phone = String(body.phone || '');
    const message = String(body.message || '');

    if (!isValidName(name) || !isValidEmail(email) || !isValidPhone(phone) || !isValidMessage(message)) {
      return json({ ok: false, error: 'invalid_fields' }, 400, origin);
    }
    if (
      name.length > FIELD_LIMITS.name ||
      email.length > FIELD_LIMITS.email ||
      phone.length > FIELD_LIMITS.phone ||
      message.length > FIELD_LIMITS.message
    ) {
      return json({ ok: false, error: 'field_too_long' }, 400, origin);
    }

    // Тихі спам-перевірки — так само відповідаємо успіхом, щоб не підказувати боту.
    if (hasSpamPhrases(message) || isBlockedDomain(email.trim().toLowerCase())) {
      return json({ ok: true }, 200, origin);
    }
    if (containsUrl(message)) {
      return json({ ok: false, error: 'url_in_message' }, 400, origin);
    }

    // Секрети перевіряємо тут, а не раніше — щоб honeypot/спам-пастки й далі
    // мовчки відповідали {ok:true} незалежно від стану конфігурації воркера.
    if (!env.TURNSTILE_SECRET || !env.EMAILJS_PRIVATE_KEY) {
      return json({ ok: false, error: 'server_not_configured' }, 503, origin);
    }

    const turnstileOk = await verifyTurnstile(body.turnstileToken, env.TURNSTILE_SECRET, ip);
    if (!turnstileOk) {
      return json({ ok: false, error: 'turnstile_failed' }, 400, origin);
    }

    try {
      await sendViaEmailJS(
        {
          from_name: name.trim(),
          reply_to: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
          site: new URL(origin).hostname,
          site_name: siteConfig.site_name,
        },
        env.EMAILJS_PRIVATE_KEY
      );
    } catch (err) {
      // Лишаємо в логах (wrangler tail) — корисно для діагностики, якщо
      // EmailJS колись знову поверне помилку (квота, зміна шаблону тощо).
      console.error('EmailJS send failed:', err && err.message);
      return json({ ok: false, error: 'send_failed' }, 502, origin);
    }

    return json({ ok: true }, 200, origin);
  },
};
