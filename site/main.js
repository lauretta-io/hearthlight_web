const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const revealItems = document.querySelectorAll(".reveal");

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    body.classList.toggle("nav-open", !expanded);
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      body.classList.remove("nav-open");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => revealObserver.observe(item));

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const route = body.dataset.page || "home";
const routeMap = {
  home: "home",
  "quick-start": "quick-start",
  "model-library": "zoos",
  "trigger-library": "zoos",
  "connector-library": "zoos",
};

document.querySelectorAll(".primary-nav a").forEach((link) => {
  if (link.dataset.route === routeMap[route]) {
    link.classList.add("is-active");
  }
});

document.querySelectorAll(".detail-nav a").forEach((link) => {
  if (link.dataset.page === route) {
    link.classList.add("is-active");
  }
});

if (route === "home") {
  const sectionLinks = new Map();
  const homeLink = document.querySelector('.primary-nav a[data-route="home"]');
  document.querySelectorAll("[data-section-link]").forEach((link) => {
    sectionLinks.set(link.dataset.sectionLink, link);
  });

  const clearHomeNavState = () => {
    document.querySelectorAll('.primary-nav a[data-route="home"], .primary-nav a[data-section-link]').forEach((link) => {
      link.classList.remove("is-active");
    });
  };

  const sections = [...document.querySelectorAll("section[id]")];
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      clearHomeNavState();

      const activeLink = sectionLinks.get(visible.target.id);
      if (activeLink) {
        activeLink.classList.add("is-active");
      }
    },
    {
      threshold: [0.2, 0.45, 0.7],
      rootMargin: "-20% 0px -55% 0px",
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 120 || !homeLink) {
        return;
      }
      clearHomeNavState();
      homeLink.classList.add("is-active");
    },
    { passive: true }
  );
}
