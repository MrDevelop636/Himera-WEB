import { gsap } from "gsap"; // Dodaj import GSAP

class CustomCursor {
  constructor() {
    this.cursor = document.querySelector(".cursor");
    this.gsap = gsap; // Zapisz referencję do GSAP
    this.init();
  }

  init() {
    document.addEventListener("mousemove", this.moveCursor.bind(this));

    // Hover effects
    const hoverElements = document.querySelectorAll("a, button, [data-cursor]");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (el.dataset.cursor === "text") {
          this.cursor.classList.add("cursor--text");
        } else if (el.dataset.cursor === "media") {
          this.cursor.classList.add("cursor--media");
        } else {
          this.cursor.classList.add("cursor--active");
        }
      });
      el.addEventListener("mouseleave", () => {
        this.cursor.classList.remove(
          "cursor--active",
          "cursor--text",
          "cursor--media"
        );
      });
    });

    // Hide cursor when not needed
    document.addEventListener("mouseleave", () => {
      this.cursor.classList.add("cursor--hidden");
    });
    document.addEventListener("mouseenter", () => {
      this.cursor.classList.remove("cursor--hidden");
    });
  }

  moveCursor(e) {
    this.gsap.to(this.cursor, {
      // Użyj zapisanej referencji
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: "power2.out",
    });
  }
}

export default CustomCursor;
