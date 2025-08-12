import Splide from "@splidejs/splide";
import "@splidejs/splide/css"; // Domyślny styl CSS

function initModelsSlider() {
  // Sprawdź czy element istnieje na stronie
  const sliderElement = document.querySelector(".splide");

  if (!sliderElement) return;

  // Inicjalizacja slidera z pełnymi opcjami
  const splide = new Splide(".splide", {
    type: "loop",
    perPage: 2,
    perMove: 1,
    gap: "2rem",
    pagination: false,
    arrows: false,
    drag: "free",
    snap: true,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    breakpoints: {
      1200: {
        perPage: 2,
        gap: "1.5rem",
      },
      768: {
        perPage: 1,
        gap: "1rem",
      },
      480: {
        perPage: 1,
        gap: "0.5rem",
      },
    },
  });

  // Dodatkowe eventy
  splide.on("mounted", () => {

  });

  splide.on("move", (newIndex) => {

  });

  splide.mount();
}

export default initModelsSlider;
