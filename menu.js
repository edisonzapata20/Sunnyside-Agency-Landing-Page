const hamburger = document.querySelector(".mobile-icon");
const mobileView = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", function () {
  mobileView.classList.toggle("fade");
});
