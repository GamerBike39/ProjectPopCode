VanillaCounter();

let loader = document.querySelector(".containerLoader");
let transi = document.querySelector(".containerTransi");
let home = document.querySelector(".containerAccueil");
let jeu = document.querySelector(".containerJeu");
let body = document.querySelector(".bg");

setTimeout(() => {
  loader.classList.remove("dfjcic");
  loader.classList.add("displayNone");
}, 2500);
setTimeout(() => {
  transi.classList.remove("displayNone");
}, 2600);
setTimeout(() => {
  transi.classList.add("displayNone");
  home.classList.remove("displayNone");
  home.classList.add("flex");
}, 3800);

let beginGame = document.querySelector(".beginGame");
beginGame.addEventListener("click", () => {
  home.classList.remove("flex");
  home.classList.add("displayNone");
  jeu.classList.remove("displayNone");
  body.classList.remove("bgAccueil");
  body.classList.add("bgJeu");
});

// new ResizeObserver((entries) => {
//   if (entries[0].contentRect.width <= 900) {
//     navLinksContainer.style.transition = "transform 0.3s ease-out";
//     navLinksContainer.style.background = "rgb(28,24,26)";
//   } else {
//     navLinksContainer.style.transition = "none";
//     navLinksContainer.style.background = "";
//   }
// }).observe(document.body);
