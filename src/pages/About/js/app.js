// src/js/app.js
// import simulateLoading from "./animation/loader.js";
import CustomCursor from "./animation/cursor.min.js";
import initScrollAnimations from "./animation/scroll.min.js";
import initModelsSlider from "./components/slider.min.js";
import initNavbar from "./ui/navbar.min.js";
import initThemeToggle from "./ui/theme.min.js";
import initFormAnimations from "./ui/forms.min.js";
import initScrollAnimations2 from "./animation/about.js";

// Inicjalizacja
document.addEventListener("DOMContentLoaded", () => {
  // simulateLoading();
  new CustomCursor();
  initScrollAnimations();
  initNavbar();
  initThemeToggle();
  initModelsSlider();
  initFormAnimations();
});
