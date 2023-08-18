//1. JavaScript Functionality:
const slides = document.querySelectorAll("img");
let currentIndex = 0;
function moveSlide(val) {
  slides[currentIndex].classList.remove("active");
  currentIndex += val;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > 4) currentIndex = 4;
  slides[currentIndex].classList.add("active");
}
