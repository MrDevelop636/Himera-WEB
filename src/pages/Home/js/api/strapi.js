// strapiApi.js
import { STRAPI_CONFIG } from "./strapiConfig.js";

/**
 * Pobiera dane z Strapi
 */
export async function loadHomePage() {
  try {
    const headers = { Accept: "application/json" };
    if (STRAPI_CONFIG.token) {
      headers["Authorization"] = `Bearer ${STRAPI_CONFIG.token}`;
    }

    const res = await fetch(STRAPI_CONFIG.url, { headers });
    if (!res.ok) throw new Error(`HTTP ${res.status} - ${res.statusText}`);

    const json = await res.json();
    const data = json.data;

    // Render Hero
    const hero = data.Hero;
    if (hero) {
      document.getElementById("heroTitle").textContent = hero.Title || "";
      document.getElementById("heroSubtitle").textContent =
        hero.Subtitle?.map((block) =>
          block.children.map((c) => c.text).join("")
        ).join("\n") || "";

      const heroCTA = document.getElementById("heroCTA");
      heroCTA.textContent = hero.CTA_Text || "Learn More";
      heroCTA.href = hero.CTA_Link || "#";
    }

    // Render Navbar
    const navbar = data.Navbar;
    if (navbar?.Navbar_Link) {
      const desktopMenu = document.querySelector(".navbar__menu");
      const mobileMenu = document.querySelector(".navbar__mobile-links");
      desktopMenu.innerHTML = "";
      mobileMenu.innerHTML = "";

      navbar.Navbar_Link.forEach((link) => {
        // Desktop
        const a = document.createElement("a");
        a.href = link.URL || "#";
        a.textContent = link.Label || "No Label";
        a.className = "navbar__link";
        desktopMenu.appendChild(a);

        // Mobile
        const li = document.createElement("li");
        const aMobile = document.createElement("a");
        aMobile.href = link.URL || "#";
        aMobile.textContent = link.Label || "No Label";
        aMobile.className = "navbar__mobile-link";
        li.appendChild(aMobile);
        mobileMenu.appendChild(li);
      });
    }
  } catch (err) {
    console.error("Błąd pobierania Home Page:", err);
  }
}
