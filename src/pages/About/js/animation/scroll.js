import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Rejestracja pluginów (tylko raz)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function initScrollAnimations() {
  // Hero section
const heroAnimations = () => {
  // Usuwamy ScrollTrigger i zostawiamy samą animację
  gsap.to(".about__content", {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.to(".about__media", {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.to(".about__stat", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
  });
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
