import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


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

  // About section
  const aboutAnimations = () => {
    gsap.to(".about__content", {
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(".about__media", {
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });

    gsap.to(".about__stat", {
      scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });
  };

  // Technology cards
  const techAnimations = () => {
    gsap.to(".tech-card", {
      scrollTrigger: {
        trigger: ".technology",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  };

  // Models slider
  const modelsAnimations = () => {
    gsap.to(".models__slider", {
      scrollTrigger: {
        trigger: ".models",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    });
  };

  // Inicjalizacja wszystkich animacji
  const initAllAnimations = () => {
    heroAnimations();
    aboutAnimations();
    techAnimations();
    modelsAnimations();
  };

  // Zabezpieczenie przed wykonaniem na serwerze
  if (typeof window !== "undefined") {
    initAllAnimations();
  }
}

export default initScrollAnimations;
