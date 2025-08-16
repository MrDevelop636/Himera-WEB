// src/js/app.js
// import simulateLoading from "./animation/loader.js";
import CustomCursor from "./js/animation/cursor.min.js";
import initScrollAnimations from "./js/animation/scroll.min.js";
import initModelsSlider from "./js/components/slider.min.js";
import initNavbar from "./js/ui/navbar.min.js";
import initThemeToggle from "./js/ui/theme.min.js";
import initFormAnimations from "./js/ui/forms.min.js";
import initScrollAnimations2 from "./js/animation/about.js";

// Inicjalizacja
document.addEventListener("DOMContentLoaded", () => {
  // simulateLoading();
  new CustomCursor();
  initNavbar();
  initThemeToggle();
  initModelsSlider();
  initScrollAnimations2();
});
