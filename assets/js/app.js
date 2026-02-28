import "./pwa.js";

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-nav-toggle]");
  if(!btn) return;
  const links = document.querySelector(".nav__links");
  if(links) links.classList.toggle("is-open");
});