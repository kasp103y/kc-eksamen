window.addEventListener("DOMContentLoaded", start);

function start() {
  const burgerIcon = document.querySelector(".burger-icon");
  const burgerMenu = document.querySelector(".burger");
  const header = document.querySelector("header");

  const udstilImg = document.querySelector(".udstilling-link");
  let linkHover = document.querySelector(".event");
  let circle = document.getElementById("circle");

  burgerIcon.addEventListener("click", burgerOnClick);

  function burgerOnClick() {
    burgerMenu.classList.toggle("open");
    burgerIcon.classList.toggle("close-icon");

    header.classList.toggle("mix-blend");

    const subBurgerBtn = document.querySelector(".sub-burger-btn");
    const subBurger = document.querySelector(".sub-burger");
    const lukSub = document.querySelector("#back");

    subBurger.classList.remove("open");

    subBurgerBtn.addEventListener("click", () => {
      subBurger.classList.add("open");

      lukSub.addEventListener("click", () => {
        subBurger.classList.remove("open");
      });
    });

    //HUSK AT GØRE SÅ ARIA_EXPANDED BLIVER ===
  }

  const udstilLink = document.querySelectorAll(".udstilling-link");
  const image = document.querySelector("#image-hover");
  const figTitle = document.querySelector(".fig-title");
  const figArtist = document.querySelector(".fig-artist");

  udstilLink.forEach((e) => {
    e.addEventListener("mouseover", changeImage);
    e.addEventListener("mouseout", changeImageBack);
    function changeImage() {
      let value = this.getAttribute("data-src");
      let title = this.getAttribute("data-title");
      let artist = this.getAttribute("data-artist");
      /* console.log(); */
      image.src = value;
      figTitle.innerHTML = title;
      figArtist.innerHTML = artist;
      /*   console.log(image); */
    }
    function changeImageBack() {
      figTitle.innerHTML = "SE UDSTILLINGER";
      figArtist.innerHTML = "SE UDSTILLINGER ";
      image.src = "billeder/white-img.jpg";
    }
  });
}

/*













const mouseHover = document.querySelector(".blur-rest .mouse-event");


 mouseHover.addEventListener("mouseover", hoverDiv);

function hoverDiv() {
  mouseHover.style.visibility = "visible";
  const onMouseMove = (e) => {
    mouseHover.style.left = e.pageX + "px";
    mouseHover.style.top = e.pageY + "px";
  };

  document.addEventListener("mousemove", onMouseMove);
} */

/* udstilLink.addEventListener("mouseover", changeImage);
udstilLink.addEventListener("mouseout", changeImageBack); */

/* udstilLink.forEach((e) => {
  e.addEventListener("mouseover", () => {
    let value = event.currentTarget.getAttribute("data-src");
    console.log(value);
    const imageHolder = document.querySelectorAll(".image-hover");
    imageHolder.src = value;
  });
}); */

/* function changeImage() {
  let value = this.getAttribute("data-src");
  console.log(value);
  imageHolder.src = value;
} */

/* function changeImageBack() {
  imageHolder.src = "billeder/white-img.jpg";
} */

/* udstilLink.mouseover(function () {
  // Changes the .image-holder's img src to the src defined in .list a's data attribute.
  let value = $(this).attr("data-src");
  imageHolder.attr("src", value);
});

udstilLink.mouseout(function () {
  imageHolder.attr("src", "billeder/white-img.jpg");
}); */

/* 
function hoverDiv() {
  circle.style.visibility = "visible";
  const onMouseMove = (e) => {
    circle.style.left = e.pageX + "px";
    circle.style.top = e.pageY + "px";
  };

  document.addEventListener("mousemove", onMouseMove);
} */
/* 
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
} */

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
