/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Copy to clipboard

//Dark mode
// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }

//Scroll Reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 100,
});

sr.reveal(".home__content");
sr.reveal(".home__group");
sr.reveal(".rectangle");
sr.reveal(".shop");
