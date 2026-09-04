document.addEventListener("DOMContentLoaded", function () {

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("active");
      toggle.classList.toggle("active", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("active");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Touch-friendly schedule popups (Get Involved page).
  // Devices without real hover (touch) get a tap-to-reveal step first,
  // since the info would otherwise never be seen before the link is followed.
  var supportsHover = window.matchMedia("(hover: hover)").matches;
  var dayCells = document.querySelectorAll(".day-cell");

  if (!supportsHover) {
    dayCells.forEach(function (cell) {
      var link = cell.querySelector("a");
      if (!link) return;

      link.addEventListener("click", function (e) {
        if (!cell.classList.contains("popup-open")) {
          e.preventDefault();
          dayCells.forEach(function (other) {
            if (other !== cell) other.classList.remove("popup-open");
          });
          cell.classList.add("popup-open");
        }
      });
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".day-cell")) {
        dayCells.forEach(function (cell) {
          cell.classList.remove("popup-open");
        });
      }
    });
  }

});
