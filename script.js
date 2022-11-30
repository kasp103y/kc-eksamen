const burgerIcon = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".burger");

burgerIcon.addEventListener("click", burgerOnClick);

function burgerOnClick() {
  burgerMenu.classList.toggle("open");
  burgerIcon.classList.toggle("close-icon");
}
