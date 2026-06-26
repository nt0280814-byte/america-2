document.addEventListener("DOMContentLoaded", () => {
  /* ---------- mobile menu ---------- */
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-toggle");

  if (toggle && menu) {
    toggle.addEventListener("click", () => menu.classList.add("is-open"));
  }
  if (closeBtn && menu) {
    closeBtn.addEventListener("click", () => menu.classList.remove("is-open"));
  }
  if (menu) {
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => menu.classList.remove("is-open"))
    );
  }

  /* ---------- active nav state ---------- */
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".bookmarks a, .mobile-menu a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("is-active");
  });

  /* ---------- typewriter hero line ---------- */
  const typedEl = document.querySelector(".typed-line");
  if (typedEl) {
    let lines = [];
    try {
      lines = JSON.parse(typedEl.dataset.lines || "[]");
    } catch (e) {
      lines = [];
    }
    if (lines.length) {
      const span = document.createElement("span");
      const cursor = document.createElement("span");
      cursor.className = "cursor";
      cursor.textContent = "|";
      typedEl.textContent = "";
      typedEl.appendChild(span);
      typedEl.appendChild(cursor);

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        span.textContent = lines[0];
      } else {
        let li = 0,
          ci = 0,
          deleting = false;
        (function tick() {
          const full = lines[li];
          if (!deleting) {
            ci++;
            span.textContent = full.slice(0, ci);
            if (ci === full.length) {
              deleting = true;
              setTimeout(tick, 1900);
              return;
            }
          } else {
            ci--;
            span.textContent = full.slice(0, ci);
            if (ci === 0) {
              deleting = false;
              li = (li + 1) % lines.length;
            }
          }
          setTimeout(tick, deleting ? 32 : 52);
        })();
      }
    }
  }

  /* ---------- footer year ---------- */
  document.querySelectorAll(".js-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
