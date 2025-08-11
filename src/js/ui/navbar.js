function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const burger = document.querySelector(".navbar__burger");
  const mobileMenu = document.querySelector(".navbar__mobile-menu");

  // Efekt scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar--scrolled");
    } else {
      navbar.classList.remove("navbar--scrolled");
    }
  });

  // Obsługa kliknięcia w burgera - pokaz/ukryj menu
  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
mobileMenu.classList.toggle("navbar__mobile-menu--active");

    });
  }
}

export default initNavbar;
