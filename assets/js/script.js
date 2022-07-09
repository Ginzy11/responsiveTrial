window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const hamburger = document.querySelector(".menu-toggle");
const navsub = document.querySelector(".nav-sub");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  navsub.classList.toggle("nav-change");
});
