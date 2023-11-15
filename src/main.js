const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");

hamburger.addEventListener("click", (e) => {
  navMenu.classList.toggle("active");
  e.preventDefault();
});
