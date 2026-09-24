/* A navegação e o conteúdo continuam disponíveis sem JavaScript. */
(function () {
  "use strict";
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
  var header = document.getElementById("siteHeader");
  var toggle = document.getElementById("navToggle");
  var label = document.getElementById("navLabel");
  var nav = document.getElementById("primaryNav");
  if (header && toggle && nav) {
    header.classList.add("menu-ready");
    toggle.hidden = false;
    var setOpen = function (open) {
      header.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      label.textContent = open ? "Fechar" : "Menu";
    };
    toggle.addEventListener("click", function () { setOpen(toggle.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (event) {
      if (!event.target.closest("a")) return;
      if (header.classList.contains("nav-open")) {
        setOpen(false);
        toggle.focus({ preventScroll: true });
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("nav-open")) { setOpen(false); toggle.focus(); }
    });
    document.addEventListener("click", function (event) { if (!header.contains(event.target)) setOpen(false); });
    window.matchMedia("(max-width: 960px)").addEventListener("change", function () { setOpen(false); });
  }
  var floatingLink = document.getElementById("waFloat");
  var hero = document.getElementById("topo");
  if (floatingLink && hero && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      // hidden também remove o link da navegação por teclado.
      floatingLink.hidden = entries[0].isIntersecting;
    }).observe(hero);
  }
})();
