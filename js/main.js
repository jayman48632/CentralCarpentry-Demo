// Central Carpentry — hero slideshow + footer stamps. No dependencies.
(function () {
  // Footer: year + version
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();
  var ver = document.getElementById("ver");
  if (ver && window.SITE_VERSION) ver.textContent = window.SITE_VERSION.version + " · " + window.SITE_VERSION.date;

  // Slideshow
  var hero = document.querySelector(".hero");
  if (!hero) return;
  var slides = hero.querySelectorAll(".slide");
  var dots = hero.querySelectorAll(".dot");
  var current = 0, timer = null, INTERVAL = 6000;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function show(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach(function (s, n) { s.classList.toggle("is-active", n === current); });
    dots.forEach(function (d, n) {
      d.classList.toggle("is-active", n === current);
      if (n === current) d.setAttribute("aria-current", "true"); else d.removeAttribute("aria-current");
    });
  }
  function start() { if (!reduce && !timer) timer = setInterval(function () { show(current + 1); }, INTERVAL); }
  function stop() { clearInterval(timer); timer = null; }

  dots.forEach(function (d, n) { d.addEventListener("click", function () { stop(); show(n); start(); }); });
  hero.addEventListener("mouseenter", stop);
  hero.addEventListener("mouseleave", start);
  hero.addEventListener("focusin", stop);
  hero.addEventListener("focusout", start);
  document.addEventListener("visibilitychange", function () { document.hidden ? stop() : start(); });
  start();
})();
