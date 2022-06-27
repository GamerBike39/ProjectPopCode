let app = document.getElementById("writter");
let neonText = document.querySelector("#titleNeon");
let containerLoader = document.querySelector(".containerLoader");
let popcode = document.querySelectorAll(" .neonText2 div");
let popcorn = document.querySelectorAll(".pop");
let chargement = document.querySelector("#chargement");
let popSvg = document.getElementById("popSvg");
let logo = document.querySelector(".logo");

let typewriter = new Typewriter(app, {
  loop: false,
  delay: 50,
  deleteSpeed: 100,
});

typewriter
  .typeString("Access Code School Lons")
  .pauseFor(200)
  .deleteAll()
  .typeString("Présente")
  .pauseFor(200)
  .start();
0;

setTimeout(() => {
  app.style.display = "none";
  containerLoader.style.flexDirection = "column-reverse";
  neonText.classList.remove("displayNone");
  popSvg.classList.remove("displayNone");
  chargement.style.display = "none";
  for (let i = 0; i < popcorn.length; i++) {
    popcorn[i].classList.add("displayNone");
  }
}, 5000);

setTimeout(() => {
  {
    popcode[0].style.opacity = "1";
  }
}, 5400);
setTimeout(() => {
  {
    popcode[1].style.opacity = "1";
    for (let i = 0; i < popcorn.length; i++) {
      popcorn[i].classList.remove("displayNone");
    }
  }
}, 5600);
setTimeout(() => {
  {
    popcode[2].style.opacity = "1";
  }
}, 5800);
setTimeout(() => {
  {
    popcode[3].style.opacity = "1";
  }
}, 6000);
setTimeout(() => {
  {
    popcode[4].style.opacity = "1";
  }
}, 6200);
setTimeout(() => {
  {
    popcode[5].style.opacity = "1";
  }
}, 6400);
setTimeout(() => {
  {
    popcode[6].style.opacity = "1";
    logo.classList.remove("displayNone");
  }
}, 6600);
