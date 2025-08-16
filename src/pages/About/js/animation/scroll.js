import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Rejestracja pluginów (tylko raz)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function initScrollAnimations() {
  // Hero section
const heroAnimations = () => {
  // Animacje wykonają się tylko raz przy ładowaniu
  gsap.timeline()
    .to('.hero__title', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    .to('.hero__subtitle', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
    .to('.hero__cta', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
    .to('.hero__scroll-hint', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2');
};


  // Inicjalizacja wszystkich animacji
  const initAllAnimations = () => {
    heroAnimations();
  };

  // Zabezpieczenie przed wykonaniem na serwerze
  if (typeof window !== "undefined") {
    initAllAnimations();
  }
}

export default initScrollAnimations;
