export default function initCookiesBanner() {
  const cookiesBanner = document.getElementById('cookiesBanner');
  const cookiesConfigIcon = document.getElementById('cookiesConfigIcon');
  const cookiesModal = document.getElementById('cookiesModal');
  const acceptCookiesBtn = document.getElementById('acceptCookies');
  const configureCookiesBtn = document.getElementById('configureCookies');
  const closeCookiesModalBtn = document.getElementById('closeCookiesModal');
  const saveCookiePrefsBtn = document.getElementById('saveCookiePreferences');

  if (!cookiesBanner || !cookiesConfigIcon || !cookiesModal) return;

  // Inicjalizacja dataLayer
  window.dataLayer = window.dataLayer || [];

  // Funkcja aktualizująca consent w GTM/Google Consent Mode
  function updateConsent() {
    const analyticsConsent = localStorage.getItem('analyticsCookies') === 'true' ? 'granted' : 'denied';
    const adConsent = localStorage.getItem('marketingCookies') === 'true' ? 'granted' : 'denied';

    window.dataLayer.push({
      event: 'consent_update',
      'analytics_storage': analyticsConsent,
      'ad_storage': adConsent
    });

    // Opcjonalnie, jeśli korzystasz z gtag bezpośrednio:
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        'analytics_storage': analyticsConsent,
        'ad_storage': adConsent
      });
    }
  }

  // Domyślny consent przed zgodą użytkownika
  function setDefaultConsent() {
    window.dataLayer.push({
      event: 'default_consent',
      'analytics_storage': 'denied',
      'ad_storage': 'denied'
    });
  }

  // Ustawienie domyślnego consent przy pierwszym załadowaniu
  if (!localStorage.getItem('consentInitialized')) {
    setDefaultConsent();
    localStorage.setItem('consentInitialized', 'true');
  }

  // Pokazanie banneru jeśli brak zgody
  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => cookiesBanner.classList.add('active'), 1000);
  } else {
    cookiesConfigIcon.style.display = 'block';
    updateConsent();
  }

  // Akceptacja wszystkich cookies
  acceptCookiesBtn?.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('analyticsCookies', 'true');
    localStorage.setItem('marketingCookies', 'true');

    cookiesBanner.classList.remove('active');
    cookiesConfigIcon.style.display = 'block';
    updateConsent();
  });

  // Otwieranie konfiguracji
  configureCookiesBtn?.addEventListener('click', () => cookiesModal.classList.add('active'));
  closeCookiesModalBtn?.addEventListener('click', () => cookiesModal.classList.remove('active'));
  cookiesConfigIcon?.addEventListener('click', () => cookiesModal.classList.add('active'));

  // Zapis preferencji
  saveCookiePrefsBtn?.addEventListener('click', () => {
    const analyticsChecked = document.getElementById('analyticsCookies')?.checked;
    const marketingChecked = document.getElementById('marketingCookies')?.checked;

    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('analyticsCookies', analyticsChecked);
    localStorage.setItem('marketingCookies', marketingChecked);

    cookiesModal.classList.remove('active');
    cookiesBanner.classList.remove('active');
    cookiesConfigIcon.style.display = 'block';
    updateConsent();
  });

  // Inicjalizacja checkboxów z localStorage
  const analyticsInput = document.getElementById('analyticsCookies');
  const marketingInput = document.getElementById('marketingCookies');

  if (analyticsInput) analyticsInput.checked = localStorage.getItem('analyticsCookies') === 'true';
  if (marketingInput) marketingInput.checked = localStorage.getItem('marketingCookies') === 'true';
}
