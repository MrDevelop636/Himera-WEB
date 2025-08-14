// src/js/app.js

// Animacje
// import simulateLoading from "./animation/loader.js"; // opcjonalnie
import CustomCursor from "./js/animation/cursor.min.js";
import initScrollAnimations from "./js/animation/scroll.min.js";

// Komponenty
import initModelsSlider from "./js/components/slider.min.js";
import initCookiesBanner from "./js/components/cookieBanner.min.js";
import initCounters from "./js/components/counter.min.js";

// UI
import initNavbar from "./js/ui/navbar.min.js";
import initThemeToggle from "./js/ui/theme.min.js";
import initFormAnimations from "./js/ui/forms.min.js";
import { initScrollProgress } from "./js/ui/scroll.min.js";

// API

import initContactForm from "./js/api/form.min.js";
// Inicjalizacja po załadowaniu DOM
document.addEventListener("DOMContentLoaded", () => {
  // simulateLoading(); // jeśli chcesz włączyć loader
  new CustomCursor();
  initScrollAnimations();
  initNavbar();
  initThemeToggle();
  initModelsSlider();
  initFormAnimations();
  initCookiesBanner(); // baner cookies
  initScrollProgress(); // pasek postępu scrolla
  initCounters(); // animacja liczników
  initContactForm(); // inicjalizacja formularza kontaktowego
});
