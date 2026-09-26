/* Dra. Mariângela Zanchet — interações da landing page
   Tudo progressivo: sem JS, a página continua legível e navegável. */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- ano no rodapé ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- detalhes dos tratamentos ---------- */
  document.querySelectorAll("[data-dialog]").forEach(function (button) {
    var dialog = document.getElementById(button.getAttribute("data-dialog"));
    if (!dialog) return;
    button.addEventListener("click", function () {
      dialog.showModal();
      document.documentElement.classList.add("treatment-dialog-open");
    });
    dialog.addEventListener("close", function () {
      document.documentElement.classList.remove("treatment-dialog-open");
    });
  });

  /* ---------- header: estado ao rolar ---------- */
  var header = document.getElementById("siteHeader");
  var onScrollHeader = function () {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScrollHeader();

  /* ---------- menu mobile ---------- */
  var navToggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");
  if (navToggle && header) {
    navToggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    if (nav) {
      nav.addEventListener("click", function (e) {
        if (e.target.tagName === "A" && header.classList.contains("nav-open")) {
          header.classList.remove("nav-open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    }
  }

  /* ---------- WhatsApp flutuante: aparece após o hero ---------- */
  var waFloat = document.getElementById("waFloat");
  var hero = document.getElementById("topo");
  if (waFloat && hero && "IntersectionObserver" in window) {
    var heroObserver = new IntersectionObserver(
      function (entries) {
        waFloat.classList.toggle("is-in", !entries[0].isIntersecting);
      },
      { rootMargin: "-40% 0px 0px 0px" }
    );
    heroObserver.observe(hero);
  } else if (waFloat) {
    waFloat.classList.add("is-in");
  }

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });

    // Fallback: alguns motores só disparam o IntersectionObserver após o
    // primeiro scroll/resize. Revela na hora o que já está visível.
    var revealInView = function () {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      revealEls.forEach(function (el) {
        if (el.classList.contains("is-visible")) return;
        var r = el.getBoundingClientRect();
        if (r.top < vh * 0.95 && r.bottom > 0) el.classList.add("is-visible");
      });
    };
    revealInView();
    window.requestAnimationFrame(revealInView);
    setTimeout(revealInView, 250);
    window.addEventListener("load", revealInView);
  }

  /* ---------- régua de crescimento: preenchimento por scroll ---------- */
  var rulerFill = document.getElementById("rulerFill");
  var ticking = false;
  var updateRuler = function () {
    ticking = false;
    onScrollHeader();
    if (!rulerFill) return;
    var doc = document.documentElement;
    var scrollable = doc.scrollHeight - window.innerHeight;
    var pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    rulerFill.style.height = Math.max(0, Math.min(100, pct)) + "%";
  };
  var onScroll = function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateRuler);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", updateRuler);
  updateRuler();
})();
