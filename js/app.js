const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".nav-right");
const crossBtn = document.querySelector(".cross-icon");
const blackScreen = document.querySelector(".black-screen");

function toggle() {
  sidebar.classList.toggle("active");
  blackScreen.classList.toggle("active");
}

hamburger.addEventListener("click", toggle);
crossBtn.addEventListener("click", toggle);

blackScreen.addEventListener("click", () => {
  sidebar.classList.remove("active");
  blackScreen.classList.remove("active");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 88,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
