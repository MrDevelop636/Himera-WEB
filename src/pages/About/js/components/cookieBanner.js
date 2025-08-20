export default function initCookiesBanner() {
  const cookiesBanner = document.getElementById('cookiesBanner');
  const cookiesConfigIcon = document.getElementById('cookiesConfigIcon');
  const cookiesModal = document.getElementById('cookiesModal');
  const acceptCookiesBtn = document.getElementById('acceptCookies');
  const configureCookiesBtn = document.getElementById('configureCookies');
  const closeCookiesModalBtn = document.getElementById('closeCookiesModal');
  const saveCookiePrefsBtn = document.getElementById('saveCookiePreferences');

  if (!cookiesBanner || !cookiesConfigIcon || !cookiesModal) {
    return;
  }

  // Inicjalizacja dataLayer dla GTM
  window.dataLayer = window.dataLayer || [];

  // Funkcja aktualizująca consent w GTM
  function updateGTMConsent() {
    const analyticsConsent = localStorage.getItem('analyticsCookies') === 'true' ? 'granted' : 'denied';
    const marketingConsent = localStorage.getItem('marketingCookies') === 'true' ? 'granted' : 'denied';

    // Aktualizacja consent dla GTM
    window.dataLayer.push({
      'event': 'consent_update',
      'analytics_storage': analyticsConsent,
      'ad_storage': marketingConsent,
      'ad_user_data': marketingConsent,
      'ad_personalization': marketingConsent,
      'functionality_storage': 'granted',
      'personalization_storage': 'granted',
      'security_storage': 'granted'
    });
  }

  // Inicjalizacja domyślnego consent (przed uzyskaniem zgody)
  function setDefaultConsent() {
    window.dataLayer.push({
      'event': 'default_consent',
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'functionality_storage': 'denied',
      'personalization_storage': 'denied',
      'security_storage': 'granted'
    });
  }

  // Ustaw domyślny consent przy pierwszym załadowaniu
  if (!localStorage.getItem('consentInitialized')) {
    setDefaultConsent();
    localStorage.setItem('consentInitialized', 'true');
  }

  // Sprawdzenie akceptacji cookies
  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => {
      cookiesBanner.classList.add('active');
    }, 1000);
  } else {
    cookiesConfigIcon.style.display = 'block';
    // Aktualizacja consent po załadowaniu strony jeśli już mamy preferencje
    updateGTMConsent();
  }

  // Akceptacja wszystkich cookies
  acceptCookiesBtn?.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('analyticsCookies', 'true');
    localStorage.setItem('marketingCookies', 'true');
    
    cookiesBanner.classList.remove('active');
    cookiesConfigIcon.style.display = 'block';
    
    // Aktualizacja GTM Consent
    updateGTMConsent();
  });

  // Otwieranie konfiguracji
  configureCookiesBtn?.addEventListener('click', () => {
    cookiesModal.classList.add('active');
  });

  // Zamknięcie konfiguracji
  closeCookiesModalBtn?.addEventListener('click', () => {
    cookiesModal.classList.remove('active');
  });

  // Ikona konfiguracji
  cookiesConfigIcon?.addEventListener('click', () => {
    cookiesModal.classList.add('active');
  });

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

    // Aktualizacja GTM Consent
    updateGTMConsent();
  });

  // Inicjalizacja checkboxów z localStorage
  const analyticsInput = document.getElementById('analyticsCookies');
  const marketingInput = document.getElementById('marketingCookies');

  if (analyticsInput) {
    analyticsInput.checked = localStorage.getItem('analyticsCookies') !== 'false';
  }

  if (marketingInput) {
    marketingInput.checked = localStorage.getItem('marketingCookies') !== 'false';
  }
}