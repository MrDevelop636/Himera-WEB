import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Rejestracja pluginów GSAP
gsap.registerPlugin(ScrollTrigger);

const initScrollAnimations2 = () => {
  // Inicjalizacja tylko w przeglądarce
  if (typeof window === "undefined") return;

  // --------------------------------------------
  // 1. Animacje sekcji Hero
  // --------------------------------------------
  gsap.from(".hero__title, .hero__subtitle, .hero__cta", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    stagger: 0.3,
    ease: "power3.out"
  });

  // Animacja wskazówki scroll
  gsap.from(".hero__scroll-hint", {
    opacity: 0,
    y: 20,
    delay: 1.5,
    duration: 0.8,
    ease: "power2.out"
  });

  // --------------------------------------------
  // 2. Animacje sekcji Mission & Vision
  // --------------------------------------------
  gsap.from(".mission-vision__content", {
    scrollTrigger: {
      trigger: ".mission-vision",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".mission-vision__image", {
    scrollTrigger: {
      trigger: ".mission-vision",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
  });

  // Statystyki
  gsap.from(".about__stat", {
    scrollTrigger: {
      trigger: ".about__stats",
      start: "top 80%"
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out"
  });

  // --------------------------------------------
  // 3. Animacje sekcji Team
  // --------------------------------------------
  gsap.from(".team-member", {
    scrollTrigger: {
      trigger: ".team",
      start: "top 70%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  });

  // Animacja nagłówka sekcji
  gsap.from(".team .section__header", {
    scrollTrigger: {
      trigger: ".team",
      start: "top 85%"
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
  });

  // --------------------------------------------
  // 4. Animacje osi czasu (Timeline)
  // --------------------------------------------
  gsap.from(".timeline-item", {
    scrollTrigger: {
      trigger: ".history-timeline",
      start: "top 70%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.3,
    ease: "power2.out"
  });

  // Animacja nagłówka sekcji
  gsap.from(".history-timeline .section__header", {
    scrollTrigger: {
      trigger: ".history-timeline",
      start: "top 85%"
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
  });

  // --------------------------------------------
  // 5. Animacje kart wartości (Core Values)
  // --------------------------------------------
  gsap.from(".tech-card", {
    scrollTrigger: {
      trigger: ".core-values",
      start: "top 70%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.2,
    ease: "back.out(1.7)"
  });

  // Animacja nagłówka sekcji
  gsap.from(".core-values .section__header", {
    scrollTrigger: {
      trigger: ".core-values",
      start: "top 85%"
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
  });
};

export default initScrollAnimations2;