(() => {
  "use strict";

  const root = document.documentElement;
  root.classList.add("has-js");

  const themeToggle = document.querySelector(".theme-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("#nav-menu");
  const navLinks = [...document.querySelectorAll(".nav-links a")];
  const sections = [...document.querySelectorAll("main section[id]")];

  const readTheme = () => {
    try {
      return localStorage.getItem("portfolio-theme");
    } catch {
      return null;
    }
  };

  const saveTheme = (theme) => {
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The theme still works when browser storage is unavailable.
    }
  };

  const updateThemeLabel = () => {
    if (!themeToggle) return;
    const isDark = root.dataset.theme === "dark";
    themeToggle.setAttribute("aria-label", isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap");
    themeToggle.setAttribute("aria-pressed", String(isDark));
  };

  if (!root.dataset.theme) {
    root.dataset.theme = readTheme() || "light";
  }
  updateThemeLabel();

  themeToggle?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    saveTheme(nextTheme);
    updateThemeLabel();
  });

  const closeMenu = () => {
    if (!menuToggle || !navMenu) return;
    navMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
  };

  menuToggle?.addEventListener("click", () => {
    if (!navMenu) return;
    const isOpen = navMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
  });

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("click", (event) => {
    if (!navMenu?.classList.contains("is-open")) return;
    if (!navMenu.contains(event.target) && !menuToggle?.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  };

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveLink(entry.target.id);
      });
    }, { rootMargin: "-28% 0px -62% 0px", threshold: 0 });

    sections.forEach((section) => sectionObserver.observe(section));

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.01 });

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
  } else {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  }

  const currentYear = document.querySelector("#current-year");
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());
})();
