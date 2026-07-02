/* Packet Hook — renders game cards + feature modal from GAMES (games.js) */

(function () {
  "use strict";

  const grid = document.getElementById("games-grid");
  const overlay = document.getElementById("modal-overlay");
  const modalTitle = document.getElementById("modal-title");
  const modalCount = document.getElementById("modal-count");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");

  // total feature count for a game
  function countFeatures(game) {
    return game.features.reduce((n, g) => n + g.items.length, 0);
  }

  // build one card
  function cardHTML(game, index) {
    const total = countFeatures(game);
    const pricing = game.pricing === "FREE" ? "free" : "paid";
    const img = game.image
      ? `<img class="card-img" src="${game.image}" alt="${game.name}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'card-img'}))" />`
      : `<div class="card-img"></div>`;
    return `
      <article class="card" data-index="${index}">
        ${img}
        <div class="card-body">
          <div class="card-head">
            <h3 class="card-title">${game.name}</h3>
            <span class="check">&#10004;</span>
          </div>
          <div class="card-tags">
            <span class="tag ${pricing}">${game.pricing}</span>
            <span class="tag count">${total} features</span>
          </div>
        </div>
        <div class="card-btn" data-index="${index}">View Features</div>
      </article>`;
  }

  // render grid
  function renderGrid() {
    grid.innerHTML = GAMES.map(cardHTML).join("");
    document.getElementById("game-count").textContent = GAMES.length;
  }

  // open modal for a game index
  function openModal(index) {
    const game = GAMES[index];
    if (!game) return;
    modalTitle.textContent = game.name;
    modalCount.textContent = `${countFeatures(game)} features`;
    modalBody.innerHTML = game.features
      .map(
        (grp) => `
        <div class="feat-group">
          <div class="feat-group-title">${grp.title}</div>
          <div class="feat-list">
            ${grp.items.map((f) => `<div class="feat">${f}</div>`).join("")}
          </div>
        </div>`
      )
      .join("");
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  // event delegation for card clicks
  grid.addEventListener("click", (e) => {
    const el = e.target.closest("[data-index]");
    if (!el) return;
    openModal(Number(el.dataset.index));
  });

  modalClose.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) closeModal();
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  renderGrid();
})();
