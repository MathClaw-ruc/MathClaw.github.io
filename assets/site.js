(function () {
  const root = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const topbar = document.querySelector(".topbar");
  const navLinks = document.querySelectorAll(".topnav a");
  const storageKey = "mathclaw-site-theme";

  const initialTheme = localStorage.getItem(storageKey);
  if (initialTheme === "dark" || initialTheme === "light") {
    root.setAttribute("data-theme", initialTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem(storageKey, next);
    });
  }

  if (menuToggle && topbar) {
    menuToggle.addEventListener("click", function () {
      topbar.classList.toggle("is-open");
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (topbar) topbar.classList.remove("is-open");
    });
  });
})();
