let loader = document.querySelector(".chargement");
let dotLoader = document.querySelector("#dotLoader");
const dot1 = document.querySelector("#dotContainer div:nth-child(1)");
const dot2 = document.querySelector("#dotContainer div:nth-child(2)");
const dot3 = document.querySelector("#dotContainer div:nth-child(3)");

function delay() {
  setTimeout(() => {
    dot1.classList.add("dotLoader");
  }, 2000);
  setTimeout(() => {
    dot2.classList.add("dotLoader");
  }, 2500);
  setTimeout(() => {
    dot3.classList.add("dotLoader");
  }, 3500);
  // setTimeout(() => {
  //   dot1.classList.remove("dotLoader");
  //   dot2.classList.remove("dotLoader");
  //   dot3.classList.remove("dotLoader");
  // }, 5000);
}
delay();
