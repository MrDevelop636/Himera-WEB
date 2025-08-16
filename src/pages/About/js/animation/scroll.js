import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Rejestracja pluginów (tylko raz)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function initScrollAnimations() {
  // Hero section
const heroAnimations = () => {
  const ctx = gsap.context(() => {
    gsap.from(".hero__title, .hero__subtitle, .hero__cta", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.3,
      ease: "power3.out"
    });

    gsap.from(".hero__scroll-hint", {
      opacity: 0,
      y: 20,
      delay: 1.5,
      duration: 0.8,
      ease: "power2.out"
    });
  });

  return () => ctx.revert(); // cleanup function
};

  // Mission & Vision section
  const missionAnimations = () => {
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

    gsap.from(".about__stat", {
      scrollTrigger: {
        trigger: ".about__stats",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out"
    });
  };

  // Team section
  const teamAnimations = () => {
    gsap.from(".team .section__header", {
      scrollTrigger: {
        trigger: ".team",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out"
    });

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
  };

  // History Timeline
  const historyAnimations = () => {
    gsap.from(".history-timeline .section__header", {
      scrollTrigger: {
        trigger: ".history-timeline",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out"
    });

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
  };

  // Core Values section
  const valuesAnimations = () => {
    gsap.from(".core-values .section__header", {
      scrollTrigger: {
        trigger: ".core-values",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out"
    });

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
  };

  // Inicjalizacja wszystkich animacji
  const initAllAnimations = () => {
    heroAnimations();
    missionAnimations();
    teamAnimations();
    historyAnimations();
    valuesAnimations();
  };

  // Zabezpieczenie przed wykonaniem na serwerze
  if (typeof window !== "undefined") {
    initAllAnimations();
  }
}

export default initScrollAnimations;