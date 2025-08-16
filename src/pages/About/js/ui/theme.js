function initThemeToggle() {
  const root = document.documentElement;
  const themeToggle = document.querySelector(".navbar__theme-toggle");
  const themeIcon = document.querySelector(".theme-icon");
  const cookieSettingsIcon = document.querySelector(".cookies-icon");

  const THEMES = {
    dark: {
      icon: "brightness_4",
      iconColor: "#ffffff",
      cookieColor: "#ffffff"
    },
    light: {
      icon: "brightness_7",
      iconColor: "#333333",
      cookieColor: "#333333"
    }
  };

  const updateTheme = (theme) => {
    if (themeIcon) {
      themeIcon.textContent = THEMES[theme].icon;
      themeIcon.style.color = THEMES[theme].iconColor;
    }
    if (cookieSettingsIcon) {
      cookieSettingsIcon.style.color = THEMES[theme].cookieColor;
    }
  };

  const toggleTheme = () => {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateTheme(newTheme);
  };

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  const savedTheme = localStorage.getItem("theme") || "dark";
  root.setAttribute("data-theme", savedTheme);
  updateTheme(savedTheme);
}

export default initThemeToggle;
