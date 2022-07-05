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
});

let responsivePop = document.querySelector(".responsivePop");
new ResizeObserver((entries) => {
  if (entries[0].contentRect.width <= 900) {
    responsivePop.classList.remove("displayNone");
    responsivePop.classList.add("flex");
  } else {
    responsivePop.classList.remove("flex");
    responsivePop.classList.add("displayNone");
  }
}).observe(document.body);

const lang = [
  "Javascript",
  "Html",
  "Css",
  "SQL",
  "Python",
  "Java",
  "Bash",
  "Shell",
  "Powershell",
  "C#",
  "PHP",
  "C++",
  "TypeScript",
  "C",
  "Ruby",
  "Go",
  "Assembly",
  "Swift",
  "Kotlin",
  "R",
  "VBA",
  "Objective-C",
  "Scala",
  "Rust",
  "Dart",
  "Elixir",
  "Clojure",
  "WebAssembly",
];
// mettre lang en majuscule
let langMaj = lang.map((e) => {
  return e.toUpperCase();
});
console.log(langMaj);

const arrayReponse = [];
const reponse = document.querySelector(".overlayReponse");
const reponseText = document.querySelector(".overlayReponse p:first-child");
console.log(arrayReponse);

window.addEventListener("keydown", (e) => {
  reponse.classList.remove("displayNone");
  reponse.classList.add("flex");
  console.log(e);
  if (
    e.key === "a" ||
    e.key === "b" ||
    e.key === "c" ||
    e.key === "d" ||
    e.key === "e" ||
    e.key === "f" ||
    e.key === "g" ||
    e.key === "h" ||
    e.key === "i" ||
    e.key === "j" ||
    e.key === "k" ||
    e.key === "l" ||
    e.key === "m" ||
    e.key === "n" ||
    e.key === "o" ||
    e.key === "p" ||
    e.key === "q" ||
    e.key === "r" ||
    e.key === "s" ||
    e.key === "t" ||
    e.key === "u" ||
    e.key === "v" ||
    e.key === "w" ||
    e.key === "x" ||
    e.key === "y" ||
    e.key === "z" ||
    e.key === "+" ||
    e.key === "-" ||
    e.key === " " ||
    e.key === "#"
  ) {
    reponseText.textContent += e.key.toUpperCase();
  }

  if (e.key === "Enter") {
    arrayReponse.push(reponseText.textContent);
    reponseText.textContent = "";
    console.log(arrayReponse);
    // arrayReponse.filter((e) => {
    //   if (e === "JAVASCRIPT") {
    //     console.log("ok");
    //   }
    // });
    // si la reponse est dans langUP alors ok
    if (langMaj.includes(forEach.arrayReponse)) {
      reponseText.textContent = "Bravo ! Vous avez trouvé la bonne réponse";
    }
  }
  if (e.key === "Escape") {
    reponse.classList.remove("flex");
    reponse.classList.add("displayNone");
    reponseText.textContent = "";
  }
  if (e.key === "Backspace") {
    reponseText.textContent = reponseText.textContent.slice(e, -1);
  }
});
