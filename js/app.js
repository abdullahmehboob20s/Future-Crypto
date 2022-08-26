const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".nav-right");
const crossBtn = document.querySelector(".cross-icon");
const blackScreen = document.querySelector(".black-screen");
const navRight = document.querySelector(".nav-right");
const navbar = document.querySelector("nav");

const setHeight = () => {
  navRight.style.minHeight = window.innerHeight + "px";
  blackScreen.style.minHeight = window.innerHeight + "px";
};

let deviceWidth = window.matchMedia("(max-width: 1024px)");

if (deviceWidth.matches) {
  window.addEventListener("resize", setHeight);
  setHeight();
}

// function setter() {
//   if (window.innerWidth < 1024) {
//     navRight.style.height = window.innerHeight + "px";
//     blackScreen.style.height = window.innerHeight + "px";
//   } else {
//     navRight.style.height = "auto";
//     blackScreen.style.height = "auto";
//   }

//   if (window.scrollY > 100) {
//     navbar.classList.add("scroll-active");
//   } else {
//     navbar.classList.remove("scroll-active");
//   }
// }

// document.addEventListener("scroll", setter);
// window.addEventListener("resize", setter);

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

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    450: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 88,
    },
  },
});
