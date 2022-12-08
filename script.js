window.addEventListener("DOMContentLoaded", start);

function start() {
  const burgerIcon = document.querySelector(".burger-icon");
  const burgerMenu = document.querySelector(".burger");
  const header = document.querySelector("header");
  const deBody = document.querySelector("body");
  /*  const dropdown = document.querySelector(".drop-down");
  const dropdownBtn = document.querySelector("#drop-down"); */

  /*  dropdownBtn.addEventListener("mouseover", showDropdown);
  dropdownBtn.addEventListener("mouseout", hideDropdown);
  function showDropdown() {
    dropdown.classList.toggle("open-down");
  }

  function hideDropdown() {
    dropdown.classList.toggle("open-down");
  }
 */

  /*   let btnAdd = document.querySelector("#add");
  let btnSubtract = document.querySelector("#subtract");
  let input = document.querySelector("#counter");

  btnAdd.addEventListener("click", () => {
    input.value = parseInt(input.value) + 1;
  });

  btnSubtract.addEventListener("click", () => {
    input.value = parseInt(input.value) - 1;
  }); */

  const minusBtn = document.querySelectorAll(".subtract");
  const plusBtn = document.querySelectorAll(".add");
  const numberPlace = document.querySelector("p.counter");
  let number = 0; /// number value
  let min = 0; /// min number
  let max = 12; /// max number

  minusBtn.forEach((el, index) => {
    el.addEventListener("click", () => {
      if (number > min) {
        number = number - 1; /// Minus 1 of the number
        numberPlace[index].innerHTML = number; /// Display the value in place of the number
      }
      if (number == min) {
        numberPlace[index].style.color = "red";
        setTimeout(function () {
          numberPlace[index].style.color = "black";
        }, 500);
      } else {
        numberPlace[index].style.color = "black";
      }
    });
  });

  plusBtn.forEach((el, index) => {
    el.addEventListener("click", () => {
      if (number < max) {
        number = number + 1;
        numberPlace[index].innerHTML = number; /// Display the value in place of the number
      }
      if (number == max) {
        numberPlace[index].style.color = "red";
        setTimeout(function () {
          numberPlace[index].style.color = "black";
        }, 500);
      } else {
        numberPlace[index].style.color = "black";
      }
    });
  });

  burgerIcon.addEventListener("click", burgerOnClick);
  const subBurgerBtn = document.querySelector(".sub-burger-btn");
  const subBurger = document.querySelector(".sub-burger");
  const lukSub = document.querySelector("#back");

  /*  dropdownBtn.addEventListener("click", showDropdown);
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

    header.classList.toggle("mix-blend");

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

  let circle = document.getElementById("cursor");
  const onMouseMove = (e) => {
    circle.style.left = e.pageX + "px";
    circle.style.top = e.pageY + "px";
  };
  document.addEventListener("mousemove", onMouseMove);

  const hoverCursor = document.querySelectorAll(".blur-us");

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
