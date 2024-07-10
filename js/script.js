const overlay = document.getElementById("overlay");
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

function toggleOpen() {
  overlay.classList.toggle("open");
  hamburger.classList.toggle("open");
  navbar.classList.toggle("open");
}

function removeOpen() {
  document
    .querySelectorAll(".open")
    .forEach((el) => el.classList.remove("open"));
}

hamburger.addEventListener("click", toggleOpen);
window.addEventListener("resize", removeOpen);
