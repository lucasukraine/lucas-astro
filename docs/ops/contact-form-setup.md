# Налаштування контактної форми: Cloudflare Worker `contact-form`

Воркер `contact-form` обробляє відправку форм lucasua.com і saftconnector.com
на сервері — замість прямих викликів EmailJS з браузера. Щоб він запрацював,
власнику акаунтів потрібно виконати кроки нижче.

## 1. Створити віджет Turnstile

1. Зайти в [Cloudflare Dashboard → Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile).
2. **Add widget**.
3. Domains — додати всі чотири:
   - `lucasua.com`
   - `www.lucasua.com`
   - `saftconnector.com`
   - `www.saftconnector.com`
4. Widget Mode — **Managed** (рекомендовано; Cloudflare сам вирішує, чи показувати виклик).
5. Після створення — скопіювати **Site Key** (публічний, його можна передавати в код/чат) і
   **Secret Key** (приватний — він піде в секрет воркера, в код чи чат його не вставляти).

## 2. Отримати EmailJS Private Key і дозволити серверні запити

1. Зайти в [EmailJS Dashboard → Account → Security](https://dashboard.emailjs.com/admin/account/security).
2. Скопіювати **Private Key** (API Key) — це секрет, в код/чат не вставляти.
3. Увімкнути **"Allow EmailJS API for non-browser applications"** — без цього EmailJS
   відхилятиме запити від воркера (вони йдуть не з браузера з `publicKey`, а з сервера з `accessToken`).

## 3. Додати секрети у воркер

Воркер називається `contact-form`. Додати два секрети одним зі способів:

### Варіант А — через дашборд
1. [Cloudflare Dashboard → Workers & Pages → contact-form → Settings → Variables and Secrets](https://dash.cloudflare.com/?to=/:account/workers/services/view/contact-form/production/settings).
2. **Add** → тип **Secret**:
   - `TURNSTILE_SECRET` = Secret Key з кроку 1.
   - `EMAILJS_PRIVATE_KEY` = Private Key з кроку 2.
3. **Save and deploy**.

### Варіант Б — через термінал (якщо є доступ до цього репозиторію)
```bash
cd workers/contact-form
npx wrangler secret put TURNSTILE_SECRET
npx wrangler secret put EMAILJS_PRIVATE_KEY
```
Кожна команда запитає значення окремо (вставити й натиснути Enter — у терміналі не відображається).

## 4. Перевірити, що воркер готовий

Відкрити в браузері `https://<worker-url>/status` (URL воркера дасть Claude після деплою).
Має повернутись:
```json
{"ready": true}
```
Якщо `false` — хоча б один із двох секретів не додано.

## 5. Дати Claude Site Key від Turnstile

Site Key (публічний, з кроку 1) потрібен, щоб вставити віджет у форму на сайті.
Secret Key та EmailJS Private Key в коді/чаті не передавати — вони йдуть лише в секрети воркера (крок 3).

## 6. Після того, як форма почне працювати через воркер

У EmailJS Dashboard → Account → Security — обмежити або вимкнути доступ до API
з браузера (той самий перемикач, що вмикали для сервера в кроці 2, має протилежну
опцію для browser-доступу). Це закриє можливість слати листи напряму з публічного
`service_ocdfpq8`/`template_wz7w36q`/`publicKey`, які раніше були видні в коді сторінки.
