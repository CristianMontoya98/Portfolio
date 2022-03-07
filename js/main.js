"use strict";
/* Definition of the variables to use */
let contmenu = document.querySelector(".menu");
let prevScrollp = window.pageYOffset;
let links = document.querySelectorAll(".menu__listContainer--elements li a");
let boxMenu = document.querySelector(".menu__listContainer");
let home = document.querySelector("#hom");
let about = document.querySelector("#abo");
let skills = document.querySelector("#skls");
let portfolio = document.querySelector("#portf");
let contact = document.querySelector("#cont");
let aboutText = document.querySelector(".about__text");
let aboutImage = document.querySelector(".about__image");
let cards = document.querySelectorAll(".card");
let contactG = document.querySelector(".contact__content--graphic");
let contactF = document.querySelector(".contact__content--form");
let menubtn = document.querySelector(".menu__button");
let icon = document.querySelector(".menu__button i");
let auxiliar = true;
let activator = true;
let form = document.querySelector("#form");
let mailto = document.querySelector("#mailto");

activateMenu();
hideMenu();
activeItem();
eventItem();
/* Event listener scroll, executes the viewScroll function */
window.addEventListener("scroll", viewScroll);

form.addEventListener("submit", handleSubmit);
/* Function to view the diferent divs with their animations,
verifies if the offsetTop of the element is less than the scrolltop and
in every case asign the opacity and an animation with the diferents classes */
function viewScroll() {
  let scrollTop = document.documentElement.scrollTop;
  let aboutAnimated = aboutText.offsetTop;
  let contactAnimated = contactG.offsetTop;
  let contactFanimated = contactF.offsetTop;
  if (aboutAnimated - 600 < scrollTop) {
    aboutText.style.opacity = 1;
    aboutText.classList.add("animateLeft");
  }
  if (aboutAnimated - 300 < scrollTop) {
    aboutImage.style.opacity = 1;
    aboutImage.classList.add("animateUp");
  }
  cards.forEach((card) => {
    let cardAnimated = card.offsetTop;
    if (cardAnimated - 700 < scrollTop) {
      card.style.opacity = 1;
      card.classList.add("animateLeft");
    }
  });
  if (contactAnimated - 500 < scrollTop) {
    contactG.style.opacity = 1;
    contactG.classList.add("animateLeft");
  }
  if (contactFanimated - 800 < scrollTop) {
    contactF.style.opacity = 1;
    contactF.classList.add("animateUp");
  }
}

/* function to hide the navbar when the user scrolls down the page */
function hideMenu() {
  window.onscroll = () => {
    let currentScrollp = window.pageYOffset;
    /* Mostrar y ocultar menu */
    if (prevScrollp > currentScrollp) {
      contmenu.style.top = "0";
      contmenu.style.transition = "0.5s";
    } else {
      contmenu.style.top = "-250px";
      contmenu.style.transition = "0.5s";
    }

    prevScrollp = currentScrollp;

    let up = window.pageYOffset;
    if (up <= 600) {
      contmenu.style.background = "none";
    } else {
      contmenu.style.background = "rgba(0,0,0,0.9)";
    }
  };
}
/* function to set the active class in two cases after the click event,
first remove the class active in all the elements, then add the class to the element clicked */
function activeItem() {
  links.forEach((element) => {
    element.addEventListener("click", (even) => {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      even.target.classList.add("active");
    });
  });
}
/* function to show or hide the menu when the hamburger button is clicked */
function activateMenu() {
  menubtn.addEventListener("click", () => {
    icon.classList.toggle("fa-times");
    auxiliar = false;
    if (activator) {
      boxMenu.style.left = "0";
      boxMenu.style.transition = "0.5s";
      activator = false;
    } else {
      boxMenu.style.left = "-100%";
      boxMenu.style.transition = "0.5s";
      activator = true;
    }
  });
}
/* function to hide the menu when an option is clicked */
function hide() {
  if (!auxiliar) {
    boxMenu.style.left = "-100%";
    boxMenu.style.transition = "0.5s";
    icon.classList.toggle("fa-times");
    auxiliar = true;
    activator = true;
  }
}
function eventItem() {
  home.addEventListener("click", () => {
    hide();
  });
  about.addEventListener("click", () => {
    hide();
  });
  skills.addEventListener("click", () => {
    hide();
  });
  portfolio.addEventListener("click", () => {
    hide();
  });
  contact.addEventListener("click", () => {
    hide();
  });
}

/* Function to send the email of the form */
async function handleSubmit(event) {
  event.preventDefault();
  const formD = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: formD,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    this.reset();
    alert("Thank you for contact me :)");
  }
}


