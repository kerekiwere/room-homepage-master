/* ========== MENU FUNCTIONALITY ========== */

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

/* ========== SLIDER FUNCTIONALITY ========== */
const hero = document.getElementById("hero");
const slideLeft = document.getElementById("slide-left");
const slideRight = document.getElementById("slide-right");
const slideImage = document.getElementById("slide-image");
const slideTitle = document.getElementById("slide-title");
const slideText = document.getElementById("slide-text");
let slides = [];
let slideIndex = 0;

function updateSlide() {
  slideTitle.innerText = slides[slideIndex].title;
  slideText.innerText = slides[slideIndex].text;
  slideImage.innerHTML = `
  <source media="(min-width: 768px)" srcset="images/${slides[slideIndex].desktopImage}" />
        <img src="images/${slides[slideIndex].mobileImage}" alt="Hero image" class="full-image">
  `;
  hero.classList.remove("animate");
}

function changeIndex() {
  if (this.id === "slide-left") {
    slideIndex === 0 ? (slideIndex = slides.length - 1) : slideIndex--;
  } else if (this.id === "slide-right") {
    slideIndex === slides.length - 1 ? (slideIndex = 0) : slideIndex++;
  }
  hero.classList.add("animate");
  hero.addEventListener("transitionend", updateSlide);
}

async function fetchData() {
  const url = "slides.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    slides = await response.json();
    updateSlide();
  } catch (error) {
    console.error(error.message);
  }
}
fetchData();
slideLeft.addEventListener("click", changeIndex);
slideRight.addEventListener("click", changeIndex);
