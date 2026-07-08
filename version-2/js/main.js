/**
 * GMUP Version 2 — navbar mobile toggle + agenda dropdown
 */
(function () {
  const navbar = document.getElementById("navbar");
  const toggle = document.querySelector("[data-nav-toggle]");
  if (!navbar || !toggle) return;

  function setOpen(open) {
    navbar.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  }

  function closeDropdowns() {
    navbar.querySelectorAll(".navbar__dropdown.is-open").forEach(function (dropdown) {
      dropdown.classList.remove("is-open");
      const trigger = dropdown.querySelector(".navbar__dropdown-trigger");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    });
  }

  toggle.addEventListener("click", function () {
    setOpen(!navbar.classList.contains("is-open"));
  });

  navbar.querySelectorAll(".navbar__mobile a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  navbar.querySelectorAll(".navbar__dropdown").forEach(function (dropdown) {
    const trigger = dropdown.querySelector(".navbar__dropdown-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", function (event) {
      event.stopPropagation();
      const open = !dropdown.classList.contains("is-open");
      closeDropdowns();
      if (open) {
        dropdown.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", function () {
    closeDropdowns();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setOpen(false);
      closeDropdowns();
    }
  });
})();
