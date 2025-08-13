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

  // Sprawdzenie akceptacji cookies
  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => {
      cookiesBanner.classList.add('active');
    }, 1000);
  } else {
    cookiesConfigIcon.style.display = 'block';
  }

  // Akceptacja wszystkich cookies
  acceptCookiesBtn?.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('analyticsCookies', 'true');
    localStorage.setItem('marketingCookies', 'true');
    cookiesBanner.classList.remove('active');
    cookiesConfigIcon.style.display = 'block';
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

    if (!localStorage.getItem('cookiesAccepted')) {
      cookiesBanner.classList.remove('active');
      cookiesConfigIcon.style.display = 'block';
    }
  });

  // Inicjalizacja checkboxów z localStorage
  if (localStorage.getItem('analyticsCookies') === 'false') {
    const analyticsInput = document.getElementById('analyticsCookies');
    if (analyticsInput) analyticsInput.checked = false;
  }

  if (localStorage.getItem('marketingCookies') === 'false') {
    const marketingInput = document.getElementById('marketingCookies');
    if (marketingInput) marketingInput.checked = false;
  }
}
