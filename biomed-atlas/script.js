// Mobile navigation
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});
navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
  if (menuToggle) { menuToggle.textContent = "☰"; menuToggle.setAttribute("aria-label", "Open navigation"); }
}));

// Learning hub search and category filters
const searchInput = document.querySelector("#articleSearch");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const articleCards = [...document.querySelectorAll(".article-card")];
const noResults = document.querySelector("#noResults");
let activeFilter = "all";

function filterArticles() {
  const term = (searchInput?.value || "").trim().toLowerCase();
  let visibleCount = 0;
  articleCards.forEach(card => {
    const categoryMatches = activeFilter === "all" || card.dataset.category === activeFilter;
    const searchable = `${card.dataset.search || ""} ${card.textContent}`.toLowerCase();
    const searchMatches = searchable.includes(term);
    const visible = categoryMatches && searchMatches;
    card.hidden = !visible;
    if (visible) visibleCount++;
  });
  if (noResults) noResults.hidden = visibleCount !== 0;
}
filterButtons.forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(item => item.classList.toggle("active", item === button));
  filterArticles();
}));
searchInput?.addEventListener("input", filterArticles);

// Current year in footer
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
