let loader = document.querySelector(".chargement");
let dotLoader = document.querySelector(".dotContainer");
const dot1 = document.querySelector(".dotContainer div:nth-child(1)");
const dot2 = document.querySelector(".dotContainer div:nth-child(2)");
const dot3 = document.querySelector(".dotContainer div:nth-child(3)");

function delay() {
  setTimeout(() => {
    dot1.classList.add("dotLoader");
  }, 2000);
  setTimeout(() => {
    dot2.classList.add("dotLoader");
  }, 2500);
  setTimeout(() => {
    dot3.classList.add("dotLoader");
  }, 3000);
}
delay();

let app = document.getElementById("writter");
let typewriter = new Typewriter(app, {
  loop: true,
});

typewriter

  .typeString("Une production")
  .pauseFor(500)
  .deleteAll()
  .typeString("Access Code School Lons")
  .pauseFor(1000)
  // .deleteAll()
  .typeString("<br>&nbsp&nbsp Présente")
  .pauseFor(5000)
  .start();
