const menuBtn = document.querySelector(
  ".header__menu-icon__hamburger-container"
);

const nav = document.querySelector(".header__nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
