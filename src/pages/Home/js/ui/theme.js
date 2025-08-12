// Theme toggle
function initThemeToggle() {
  const themeToggle = document.querySelector(".navbar__theme-toggle");
  const themeIcon = document.querySelector(".theme-icon");

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    themeIcon.textContent =
      newTheme === "dark" ? "brightness_4" : "brightness_7";
    localStorage.setItem("theme", newTheme);
  });

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  themeIcon.textContent =
    savedTheme === "dark" ? "brightness_4" : "brightness_7";
}

export default initThemeToggle;
