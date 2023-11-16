window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("fix-nav");
  } else {
    header.classList.remove("fix-nav");
  }
};

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");

hamburger.addEventListener("click", (e) => {
  navMenu.classList.toggle("active");
  e.preventDefault();
});
