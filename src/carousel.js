const carousel = document.querySelector(".carousel");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;
let prevIndex;
const images = document.querySelectorAll(".carousel-image");

const totalImages = Object.keys(images).length;

function changeColor() {
  const lastCard = images[(currentIndex + 2) % images.length].querySelector(".carousel-card");
  const currentCard = images[(prevIndex + 2) % images.length].querySelector(".carousel-card");

  setTimeout(() => {
    lastCard.classList.add("carousel-choosed-card");
    currentCard.classList.add("carousel-not-choosed-card");
  }, 10);

  setTimeout(() => {
    lastCard.classList.remove("carousel-not-choosed-card");
    currentCard.classList.remove("carousel-choosed-card");
  }, 490);
}

// Use this in your project, if you're doing it locally
// const imageWidth = images[1].getBoundingClientRect().x;


console.log("getbounding1", images[1].getBoundingClientRect());

leftArrow.addEventListener("click", () => {
  prevIndex = currentIndex;
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  carousel.style.transform = `translateX(-${Math.max(images[0].offsetWidth, 370)}px)`;
  carousel.insertBefore(images[currentIndex], carousel.firstChild);

  setTimeout(() => {
    carousel.style.transform = "";
    carousel.classList.add("sliding-transition");
  }, 10);

  setTimeout(() => {
    carousel.classList.remove("sliding-transition");
  }, 490);
  changeColor();
});

rightArrow.addEventListener("click", () => {
  carousel.classList.add("sliding-transition");

  prevIndex = currentIndex;
  currentIndex = (currentIndex + 1) % totalImages;

  carousel.style.transform = `translateX(-${Math.max(images[0].offsetWidth, 370)}px)`;

  setTimeout(() => {
    carousel.appendChild(images[prevIndex]);
    carousel.classList.remove("sliding-transition");
    carousel.style.transform = "";
  }, 500);
  changeColor();
});