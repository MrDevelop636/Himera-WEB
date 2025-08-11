// src/js/app.js
import simulateLoading from "./animation/loader.js";
import CustomCursor from "./animation/cursor.js";
import initScrollAnimations from "./animation/scroll.js";
import initModelsSlider from "./components/slider.js";
import initNavbar from "./ui/navbar.js";
import initThemeToggle from "./ui/theme.js";
import initFormAnimations from "./ui/forms.js";

// Inicjalizacja
document.addEventListener("DOMContentLoaded", () => {
  simulateLoading();
  new CustomCursor();
  initScrollAnimations();
  initNavbar();
  initThemeToggle();
  initModelsSlider();
  initFormAnimations();
});
