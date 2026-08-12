// src/analytics/adsConversion.js
// Єдина точка правди для конверсій лідів (Google Ads + GA4 generate_lead).
// Викликати ЛИШЕ після підтвердженого успіху відправки форми (2xx-відповідь,
// success-колбек SDK, рендер блоку "Дякуємо") — ніколи на click/submit.

// lucasua.com — ярлик конверсії цього сайту в акаунті AW-11119473489.
// Якщо ярлик конверсії в Google Ads зміниться — міняти тільки тут.
const CONVERSION_LABEL = 'AW-11119473489/BH5PCN-1-t8cENHmlrYp';

const firedTransactionIds = new Set();

function makeTransactionId() {
  if (window.crypto && typeof window.crypto.randomUUID === 'function') {
    return window.crypto.randomUUID();
  }
  return 'lead-' + Date.now() + '-' + Math.random().toString(36).slice(2, 10);
}

/**
 * @param {{ formId: string, transactionId?: string }} payload
 *   formId — ідентифікатор форми для розрізнення джерела в GA4 (generate_lead).
 *   transactionId — опційно; якщо не передати, згенерується сам. Той самий
 *   transactionId вдруге подію не викличе (дедуплікація ретраю/подвійного кліку).
 */
export function trackLeadConversion(payload) {
  const formId = (payload && payload.formId) || 'unknown_form';
  const transactionId = (payload && payload.transactionId) || makeTransactionId();

  if (firedTransactionIds.has(transactionId)) return;
  firedTransactionIds.add(transactionId);

  // gtag може бути відсутній (блокувальник реклами, помилка завантаження) —
  // ніколи не кидаємо помилку і не блокуємо виклик, що йде після цього.
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', 'generate_lead', { form_id: formId, form_name: formId });
  window.gtag('event', 'conversion', {
    send_to: CONVERSION_LABEL,
    transaction_id: transactionId,
  });
}
