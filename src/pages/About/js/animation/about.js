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
  gsap.to(".hero__title, .hero__subtitle, .hero__cta", {
    opacity: 1,
    y: 40,
    duration: 1.2,
    stagger: 0.3,
    ease: "power3.out"
  });
  // --------------------------------------------
  // 2. Animacje sekcji Mission & Vision
  // --------------------------------------------
  ScrollTrigger.create({
    trigger: ".mission-vision",
    start: "top 80%",
    onEnter: () => {
      gsap.to(".mission-vision__content", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.to(".mission-vision__image", {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      });
    }
  });

  // Statystyki
  gsap.to(".about__stat", {
    scrollTrigger: {
      trigger: ".mission-vision",
      start: "top 70%"
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "back.out"
  });

  // --------------------------------------------
  // 3. Animacje sekcji Team
  // --------------------------------------------
  gsap.to(".team-member", {
    scrollTrigger: {
      trigger: ".team",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  });

  // --------------------------------------------
  // 4. Animacje osi czasu (Timeline)
  // --------------------------------------------
  gsap.to(".timeline-item", {
    scrollTrigger: {
      trigger: ".history-timeline",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    x: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: "power2.out"
  });

  // --------------------------------------------
  // 5. Animacje kart technologii (Values)
  // --------------------------------------------
  gsap.to(".tech-card", {
    scrollTrigger: {
      trigger: ".technology",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "back.out"
  });
};

export default initScrollAnimations2;