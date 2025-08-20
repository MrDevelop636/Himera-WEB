// src/js/app.js

// Animacje
// import simulateLoading from "./animation/loader.js"; // opcjonalnie
import CustomCursor from "@About/js/animation/cursor.min.js";
import initScrollAnimations2 from "@About/js/animation/about.min.js";
import initScrollAnimations from "@About/js/animation/scroll.min.js";

// Komponenty
import initModelsSlider from "@About/js/components/slider.min.js";
import initCookiesBanner from "@About/js/components/cookieBanner.js";

// UI
import initNavbar from "@About/js/ui/navbar.min.js";
import initThemeToggle from "@About/js/ui/theme.min.js";
import initFormAnimations from "@About/js/ui/forms.min.js";
import { initScrollProgress } from "@About/js/ui/scroll.min.js";

// API

import Mailer from "@About/js/api/mailer.min.js";
// Inicjalizacja po załadowaniu DOM
document.addEventListener("DOMContentLoaded", () => {
  // simulateLoading(); // jeśli chcesz włączyć loader
  new CustomCursor();
  initScrollAnimations();
  initScrollAnimations2();
  initNavbar();
  initThemeToggle();
  initModelsSlider();
  initFormAnimations();
  initCookiesBanner(); // baner cookies
  initScrollProgress(); // pasek postępu scrolla
  initCounters(); // animacja liczników
  Mailer();
});
