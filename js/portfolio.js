document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("project-grid");
  const filterRow = document.getElementById("filter-row");
  const overlay = document.getElementById("detail-overlay");
  if (!grid || typeof PROJECTS === "undefined") return;

  // "ink" thread has no visible standalone foreground color (var(--ink) IS
  // the dark page background), so map it to a readable parchment tone here.
  function threadColorVar(thread) {
    return thread === "ink" ? "paper-text" : thread;
  }

  /* ---------- build filter tabs ---------- */
  const allTab = document.createElement("button");
  allTab.className = "filter-tab is-active";
  allTab.dataset.thread = "ink";
  allTab.dataset.chapter = "all";
  allTab.textContent = "All Chapters";
  filterRow.appendChild(allTab);

  CHAPTERS.forEach((ch) => {
    const btn = document.createElement("button");
    btn.className = "filter-tab";
    btn.dataset.thread = ch.thread;
    btn.dataset.chapter = ch.id;
    btn.textContent = ch.label;
    filterRow.appendChild(btn);
  });

  /* ---------- render grid ---------- */
  function renderGrid(filter) {
    grid.innerHTML = "";
    const items = PROJECTS.filter((p) => filter === "all" || p.chapter === filter);
    items.forEach((p, i) => {
      const chapter = CHAPTERS.find((c) => c.id === p.chapter);
      const card = document.createElement("article");
      card.className = "project-card";
      card.tabIndex = 0;
      card.style.animationDelay = `${i * 30}ms`;
      card.innerHTML = `
        <div class="thumb"><img src="${p.img}" alt="${p.title}" loading="lazy"></div>
        <div class="cardbody">
          <span class="thread-tag" style="color:var(--${threadColorVar(chapter.thread)})">${chapter.label}</span>
          <h3>${p.title}</h3>
          <p class="sub">${p.subtitle}</p>
        </div>`;
      card.addEventListener("click", () => openDetail(p.id));
      card.addEventListener("keypress", (e) => {
        if (e.key === "Enter") openDetail(p.id);
      });
      grid.appendChild(card);
    });
  }

  filterRow.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-tab");
    if (!btn) return;
    filterRow.querySelectorAll(".filter-tab").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderGrid(btn.dataset.chapter);
  });

  /* ---------- detail overlay (page-flip open) ---------- */
  function openDetail(id) {
    const p = PROJECTS.find((x) => x.id === id);
    if (!p) return;
    const chapter = CHAPTERS.find((c) => c.id === p.chapter);
    overlay.innerHTML = `
      <div class="detail-page" role="dialog" aria-modal="true" aria-label="${p.title}">
        <button class="close-detail" aria-label="Close">&times;</button>
        <span class="d-thread" style="color:var(--${threadColorVar(chapter.thread)})">${chapter.label}</span>
        <h2>${p.title}</h2>
        <p class="d-sub">${p.subtitle}</p>
        <div class="d-img"><img src="${p.img}" alt="${p.title}"></div>
        ${p.stat ? `<div class="d-stat"><span class="v">${p.stat.value}</span><span class="l">${p.stat.label}</span></div>` : ""}
        <p class="d-body">${p.body}</p>
        ${p.link ? `<a class="btn btn-solid d-link" href="${p.link.href}" target="_blank" rel="noopener">${p.link.label}</a>` : ""}
      </div>`;
    overlay.classList.add("is-open");
    overlay.querySelector(".close-detail").addEventListener("click", closeDetail);
    document.body.style.overflow = "hidden";
    history.replaceState(null, "", `${location.pathname}#${id}`);
  }

  function closeDetail() {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    history.replaceState(null, "", location.pathname);
  }

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeDetail();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDetail();
  });

  /* ---------- initial render + deep link ---------- */
  const hash = location.hash.replace("#", "");
  const hashChapter = CHAPTERS.find((c) => c.id === hash);
  if (hashChapter) {
    renderGrid(hashChapter.id);
    filterRow.querySelectorAll(".filter-tab").forEach((b) => b.classList.remove("is-active"));
    filterRow.querySelector(`[data-chapter="${hashChapter.id}"]`).classList.add("is-active");
  } else {
    renderGrid("all");
    if (hash && PROJECTS.find((p) => p.id === hash)) openDetail(hash);
  }
});
