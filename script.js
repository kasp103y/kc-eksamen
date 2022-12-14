window.addEventListener("DOMContentLoaded", start);

function start() {
  const burgerIcon = document.querySelector(".burger-icon");
  const burgerMenu = document.querySelector(".burger");

  const deBody = document.querySelector("body");

  /*   let btnAdd = document.querySelector("#add");
  let btnSubtract = document.querySelector("#subtract");
  let input = document.querySelector("#counter");

  btnAdd.addEventListener("click", () => {
    input.value = parseInt(input.value) + 1;
  });

  btnSubtract.addEventListener("click", () => {
    input.value = parseInt(input.value) - 1;
  }); */

  //Burger

  burgerIcon.addEventListener("click", burgerOnClick);
  const subBurgerBtn = document.querySelector(".sub-burger-btn");
  const subBurger = document.querySelector(".sub-burger");
  const lukSub = document.querySelector("#back");
  const logo = document.querySelector("#logo");

  /* dropdownBtn.addEventListener("click", showDropdown);
  lukSub.addEventListener("click", hideDropdown);

  function showDropdown() {
    subBurger.classList.toggle("open");
    header.classList.toggle("mix-blend");
  }
  function hideDropdown() {
    subBurger.classList.toggle("open");
    header.classList.toggle("mix-blend");
  } */

  function burgerOnClick() {
    burgerMenu.classList.toggle("open");
    burgerIcon.classList.toggle("close-icon");
    deBody.classList.toggle("stop-scrolling");
    logo.classList.toggle("white");

    let ariaEx = burgerIcon.getAttribute("aria-expanded");

    if (ariaEx == "false") {
      ariaEx = "true";
    } else {
      ariaEx = "false";
    }
    burgerIcon.setAttribute("aria-expanded", ariaEx);
    subBurgerBtn.setAttribute("aria-expanded", "false");

    subBurger.classList.remove("open");

    subBurgerBtn.addEventListener("click", () => {
      subBurger.classList.add("open");

      subBurgerBtn.setAttribute("aria-expanded", "true");

      lukSub.addEventListener("click", () => {
        subBurger.classList.remove("open");

        subBurgerBtn.setAttribute("aria-expanded", "false");
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

  const hoverCursorWhite = document.querySelectorAll(".white.blur-us");

  const hoverCursor = document.querySelectorAll(".blur-us");

  let circle = document.getElementById("cursor");
  const onMouseMove = (e) => {
    circle.style.left = e.pageX + "px";
    circle.style.top = e.pageY + "px";
  };
  document.addEventListener("mousemove", onMouseMove);

  hoverCursor.forEach((e) => {
    e.addEventListener("mouseenter", visCircle);

    function visCircle() {
      circle.classList.add("vis");
    }
  });

  hoverCursor.forEach((e) => {
    e.addEventListener("mouseleave", shrinkCircle);

    function shrinkCircle() {
      circle.classList.remove("vis");
    }
  });

  hoverCursorWhite.forEach((e) => {
    e.addEventListener("mouseenter", visCircle);

    function visCircle() {
      circle.classList.add("vis-white");
    }
  });

  hoverCursorWhite.forEach((e) => {
    e.addEventListener("mouseleave", shrinkCircle);

    function shrinkCircle() {
      circle.classList.remove("vis-white");
    }
  });

  const hoverCursorSecondary = document.querySelectorAll(".hover-circle");

  hoverCursorSecondary.forEach((e) => {
    e.addEventListener("mouseenter", visCircleSecondary);

    function visCircleSecondary() {
      circle.classList.add("vis-var");
    }
  });

  hoverCursorSecondary.forEach((e) => {
    e.addEventListener("mouseleave", shrinkCircleSecondary);

    function shrinkCircleSecondary() {
      circle.classList.remove("vis-var");
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
