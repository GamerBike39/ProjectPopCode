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

// **** section prise de réponse et analyse *******

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
let langMaj = lang.map((e) => {
  return e.toUpperCase();
});
console.log(langMaj);

const arrayReponse = [];
const reponse = document.querySelector(".overlayReponse");
const reponseText = document.querySelector(".overlayReponse p:first-child");
const reponseTextResult = document.querySelector(
  ".overlayReponse p:nth-child(2)"
);
// **** compteur de bonnes réponses et erreurs *******
const error = document.querySelectorAll(".echoue>div");
let errorNumber = 0;
const score = document.querySelector(".trouve div:nth-child(1)");
let scoreCompteur = 0;

window.addEventListener("keydown", (e) => {
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
    e.key === "#"
  ) {
    reponse.classList.remove("displayNone");
    reponse.classList.add("flex");
    reponseText.textContent += e.key.toUpperCase();
    console.log(langMaj.includes(reponseText.textContent));
  }

  if (e.key === "Enter" && langMaj.includes(reponseText.textContent)) {
    // let unique = [...new Set(arrayReponse)];
    // console.log(unique);
    reponseTextResult.textContent = "bonne réponse";
    arrayReponse.push(reponseText.textContent);
    scoreCompteur++;
    score.textContent = scoreCompteur;
    console.log(arrayReponse);
    if (scoreCompteur === 27) {
      reponseTextResult.textContent = "Bravo, vous avez gagné";
    }
    setTimeout(() => {
      reponseTextResult.textContent = "";
      reponseText.textContent = "";
      reponse.classList.remove("flex");
      reponse.classList.add("displayNone");
    }, 800);
  }
  if (e.key === "Enter" && !langMaj.includes(reponseText.textContent)) {
    reponseTextResult.textContent = "mauvaise réponse";
    errorNumber++;
    if (errorNumber === 1) {
      error[0].style.color = "#0aeff7";
    }
    if (errorNumber === 2) {
      error[1].style.color = "#0aeff7";
    }
    if (errorNumber === 3) {
      error[2].style.color = "#0aeff7";
    }
    console.log(errorNumber);
    setTimeout(() => {
      reponseTextResult.textContent = "";
      reponseText.textContent = "";
      reponse.classList.remove("flex");
      reponse.classList.add("displayNone");
    }, 800);
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

// **** section modale *******
class Modale {
  constructor(titre, img, description) {
    this.titre = titre;
    this.img = img;
    this.description = description;
  }
}

let Javascript = new Modale(
  "Javascript",
  "js.png",
  "Langue de programmation Javascript"
);
let Html = new Modale("Html", "html.jpg", "Langue de programmation Html");
let Css = new Modale("Css", "css.jpg", "Langue de programmation Css");
let SQL = new Modale("SQL", "sql.jpg", "Langue de programmation SQL");
let Python = new Modale(
  "Python",
  "python.jpg",
  "Langue de programmation Python"
);
let Java = new Modale("Java", "java.jpg", "Langue de programmation Java");
let Bash = new Modale("Bash", "bash.jpg", "Langue de programmation Bash");
let Shell = new Modale("Shell", "shell.jpg", "Langue de programmation Shell");
let Powershell = new Modale(
  "Powershell",
  "powershell.jpg",
  "Langue de programmation Powershell"
);
let CSharp = new Modale("C#", "csharp.jpg", "Langue de programmation C#");
let PHP = new Modale("PHP", "php.jpg", "Langue de programmation PHP");
let CPlusPlus = new Modale(
  "C++",
  "cplusplus.jpg",
  "Langue de programmation C++"
);
let TypeScript = new Modale(
  "TypeScript",
  "typescript.jpg",
  "Langue de programmation TypeScript"
);
let C = new Modale("C", "c.jpg", "Langue de programmation C");
let Cdiese = new Modale("C#", "csharp.jpg", "Langue de programmation C#");
let Ruby = new Modale("Ruby", "ruby.jpg", "Langue de programmation Ruby");
let Go = new Modale("Go", "go.jpg", "Langue de programmation Go");
let Assembly = new Modale(
  "Assembly",
  "assembly.jpg",
  "Langue de programmation Assembly"
);
let Swift = new Modale("Swift", "swift.jpg", "Langue de programmation Swift");
let Kotlin = new Modale(
  "Kotlin",
  "kotlin.jpg",
  "Langue de programmation Kotlin"
);
let R = new Modale("R", "r.jpg", "Langue de programmation R");
let VBA = new Modale("VBA", "vba.jpg", "Langue de programmation VBA");
let ObjectiveC = new Modale(
  "Objective-C",
  "objectivec.jpg",
  "Langue de programmation Objective-C"
);
let Scala = new Modale("Scala", "scala.jpg", "Langue de programmation Scala");
let Rust = new Modale("Rust", "rust.jpg", "Langue de programmation Rust");
let Dart = new Modale("Dart", "dart.jpg", "Langue de programmation Dart");
let Elixir = new Modale(
  "Elixir",
  "elixir.jpg",
  "Langue de programmation Elixir"
);
let Clojure = new Modale(
  "Clojure",
  "clojure.jpg",
  "Langue de programmation Clojure"
);
let WebAssembly = new Modale(
  "WebAssembly",
  "webassembly.jpg",
  "Langue de programmation WebAssembly"
);
console.log(Html);
