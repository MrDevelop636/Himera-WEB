export default function initCookiesBanner() {
  const cookiesBanner = document.getElementById('cookiesBanner');
  const cookiesConfigIcon = document.getElementById('cookiesConfigIcon');
  const cookiesModal = document.getElementById('cookiesModal');
  const acceptCookiesBtn = document.getElementById('acceptCookies');
  const configureCookiesBtn = document.getElementById('configureCookies');
  const closeCookiesModalBtn = document.getElementById('closeCookiesModal');
  const saveCookiePrefsBtn = document.getElementById('saveCookiePreferences');

  if (!cookiesBanner || !cookiesConfigIcon || !cookiesModal) {
    return; // brak wymaganych elementów w DOM
  }

  // Inicjalizacja Google Consent Mode
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }

  // Domyślne ustawienia consent (przed uzyskaniem zgody)
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted',
    'wait_for_update': 500
  });

  // Funkcja aktualizująca consent w Google Tag Manager
  function updateGoogleConsent() {
    const analyticsConsent = localStorage.getItem('analyticsCookies') === 'true' ? 'granted' : 'denied';
    const marketingConsent = localStorage.getItem('marketingCookies') === 'true' ? 'granted' : 'denied';

    gtag('consent', 'update', {
      'analytics_storage': analyticsConsent,
      'ad_storage': marketingConsent,
      'ad_user_data': marketingConsent,
      'ad_personalization': marketingConsent
    });
  }

  // Sprawdzenie akceptacji cookies
  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => {
      cookiesBanner.classList.add('active');
    }, 1000);
  } else {
    cookiesConfigIcon.style.display = 'block';
    // Aktualizacja consent po załadowaniu strony jeśli już mamy preferencje
    updateGoogleConsent();
  }

  // Akceptacja wszystkich cookies
  acceptCookiesBtn?.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('analyticsCookies', 'true');
    localStorage.setItem('marketingCookies', 'true');
    
    cookiesBanner.classList.remove('active');
    cookiesConfigIcon.style.display = 'block';
    
    // Aktualizacja Google Consent
    updateGoogleConsent();
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

    // Aktualizacja Google Consent
    updateGoogleConsent();
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