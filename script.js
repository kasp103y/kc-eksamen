const burgerIcon = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".burger");
/* const urlUdstilligner = "images.json"; */
const udstilImg = document.querySelector(".udstilling-link");
let linkHover = document.querySelector(".event");
let circle = document.getElementById("circle");

burgerIcon.addEventListener("click", burgerOnClick);
linkHover.addEventListener("mouseover", hoverDiv);
linkHover.addEventListener("mouseout", stopHoverDiv);

/* getUdstillinger(); */

function burgerOnClick() {
  burgerMenu.classList.toggle("open");
  burgerIcon.classList.toggle("close-icon");
}
/* 
function hoverDiv() {
  circle.style.visibility = "visible";
  const onMouseMove = (e) => {
    circle.style.left = e.pageX + "px";
    circle.style.top = e.pageY + "px";
  };

  document.addEventListener("mousemove", onMouseMove);
} */

function hoverDiv() {
  circle.style.visibility = "visible";
}

const onMouseMove = (e) => {
  circle.style.left = e.pageX + "px";
  circle.style.top = e.pageY + "px";
};

document.addEventListener("mousemove", onMouseMove);

function stopHoverDiv() {
  circle.style.visibility = "hidden";
}

/* async function getUdstillinger() {
  const response = await fetch(urlUdstilligner);
  const udstillinger = await response.json();
  console.log(udstillinger);
  visUdstillinger(udstillinger);
}

function visUdstillinger(udstillinger) {
  udstillinger.forEach((udstilling) => {
    console.log(udstilling.Image);
  });
} */
