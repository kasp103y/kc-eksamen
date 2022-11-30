const burgerIcon = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".burger");
/* const urlUdstilligner = "images.json"; */
const udstilImg = document.querySelector(".udstilling-link");

burgerIcon.addEventListener("click", burgerOnClick);

/* getUdstillinger(); */

function burgerOnClick() {
  burgerMenu.classList.toggle("open");
  burgerIcon.classList.toggle("close-icon");
}

async function getUdstillinger() {
  const response = await fetch(urlUdstilligner);
  const udstillinger = await response.json();
  console.log(udstillinger);
  visUdstillinger(udstillinger);
}

function visUdstillinger(udstillinger) {
  udstillinger.forEach((udstilling) => {
    console.log(udstilling.Image);
  });
}
