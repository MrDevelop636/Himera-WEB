// src/js/app.js

// Animacje
// import simulateLoading from "./animation/loader.js"; // opcjonalnie
import CustomCursor from "@Home/js/animation/cursor.min.js";
import initScrollAnimations from "@Home/js/animation/scroll.min.js";

// Komponenty
import initModelsSlider from "@Home/js/components/slider.min.js";
import initCookiesBanner from "@Home/js/components/cookieBanner.min.js";
import initCounters from "@Home/js/components/counter.min.js";

// UI
import initNavbar from "@Home/js/ui/navbar.min.js";
import initThemeToggle from "@Home/js/ui/theme.min.js";
import initFormAnimations from "@Home/js/ui/forms.min.js";
import { initScrollProgress } from "@Home/js/ui/scroll.min.js";

// API

import Mailer from "@Home/js/api/mailer.min.js";
import { loadHomePage } from "@Home/js/api/strapi.js";
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
  Mailer();
  loadHomePage();
});
