VanillaCounter();

let loader = document.querySelector(".containerLoader");
let transi = document.querySelector(".containerTransi");
let home = document.querySelector(".containerAccueil");
let jeu = document.querySelector(".containerJeu");
let body = document.querySelector(".bg");
let img = document.querySelector(".chambre");
let traitZoom = document.querySelector(".traitZoomB");

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
  body.classList.remove("bgAccueil");
  jeu.classList.remove("displayNone");
  gameEngine();
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

const arrayReponse = [];
const reponse = document.querySelector(".overlayReponse");
const reponseText = document.querySelector(".overlayReponse p:first-child");
const reponseTextResult = document.querySelector(
  ".overlayReponse p:nth-child(3)"
);
const dejaTrouveBtn = document.querySelector(".langagesFound p");
const dejaTrouveDiv = document.querySelector(".overlayReponseTrouvee");

// **** compteur de bonnes réponses et erreurs *******
const error = document.querySelectorAll(".echoue>div");
let errorNumber = 0;
const score = document.querySelector(".trouve div:nth-child(1)");
let scoreCompteur = 0;
function reponseNone() {
  reponse.classList.add("displayNone");
  reponse.classList.remove("flex");
}
function reponseShow() {
  reponse.classList.remove("displayNone");
  reponse.classList.add("flex");
}
function reponseDelete() {
  reponseTextResult.textContent = "";
  reponseText.textContent = "";
}

function gameEngine() {
  window.addEventListener("keydown", (e) => {
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
      reponseShow();
      reponseText.textContent += e.key.toUpperCase();
    }
    if (e.key === "Enter" && langMaj.includes(reponseText.textContent)) {
      arrayReponse.push(reponseText.textContent);
      let unique = [...new Set(arrayReponse)];
      dejaTrouveDiv.innerHTML = unique.join("<br>");
      if (
        unique.length !== arrayReponse.length &&
        langMaj.includes(reponseText.textContent)
      ) {
        arrayReponse.push(reponseText.textContent);
        arrayReponse.pop();
        arrayReponse.pop();
        // console.log(arrayReponse.pop());
        reponseText.textContent = "Vous avez déjà trouvé ce langage";
        reponseTextResult.textContent = "";
        setTimeout(() => {
          reponseDelete();
          reponseNone();
        }, 1500);
        return;
      }
      reponseTextResult.textContent = "✌️ bonne réponse ✌️";
      scoreCompteur++;
      score.textContent = scoreCompteur;
      if (scoreCompteur === 27) {
        reponseTextResult.textContent = "Bravo, vous avez gagné";
      }
      setTimeout(() => {
        reponseDelete();
        reponseNone();
      }, 1500);
    }
    if (e.key === "Enter" && reponseText.textContent === "") {
      e.preventDefault();
      reponseDelete();
      reponseNone();
      return;
    }
    if (
      e.key === "Enter" &&
      !langMaj.includes(reponseText.textContent) === true
    ) {
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
      setTimeout(() => {
        reponseDelete();
        reponseNone();
      }, 2000);
    }
    if (e.key === "Escape") {
      reponseNone();
      reponseDelete();
    }
    if (e.key === "Backspace") {
      reponseText.textContent = reponseText.textContent.slice(e, -1);
    }
  });
}

// ***** barre zoom *******************
function remplirZoom() {
  window.addEventListener("wheel", function (e) {
    for (i = 0; i < img.dataset.scale; i++) {
      traitZoom.style.height = `${i}0%`;
    }
  });
}
remplirZoom();

// ****** modale déja trouvée *******
dejaTrouveBtn.addEventListener("click", () => {
  dejaTrouveDiv.classList.toggle("displayNone");
  dejaTrouveDiv.classList.toggle("flex");
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
  `JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les langages HTML et CSS, JavaScript est au cœur des langages utilisés par les développeurs web. Une grande majorité des sites web l'utilisent, et la majorité des navigateurs web disposent d'un moteur JavaScript pour l'interpréter.

 JavaScript est aussi employé pour les serveurs Web avec l'utilisation (par exemple) de Node.js ou de Deno
 
 JavaScript a été créé en 1995 par Brendan Eich et intégré au navigateur web Netscape Navigator 2.0. L'implémentation concurrente de JavaScript par Microsoft dans Internet Explorer jusqu'à sa version 9 se nommait JScript, tandis que celle d'Adobe Systems se nommait ActionScript. JavaScript a été standardisé sous le nom d'ECMAScript en juin 1997 par Ecma International dans le standard ECMA-262. La version en vigueur de ce standard depuis juin 2022 est la 13e édition.
 
 C'est un langage orienté objet à prototype : les bases du langage et ses principales interfaces sont fournies par des objets. Cependant, à la différence d'un langage orienté objets, les objets de base ne sont pas des instances de classes. En outre, les fonctions sont des objets de première classe. Le langage supporte le paradigme objet, impératif et fonctionnel.
 
 JavaScript est le langage possédant le plus large écosystème grâce à son gestionnaire de dépendances npm, avec environ 500 000 paquets en août 2017. `
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
console.log(Javascript);

// const langu =
//   '{"Languages":[' +
//   '{"name":"Javascript","img":"js.png","description":"Langue de programmation Javascript"},' +
//   '{"title":"HTML","desc":"Bernard","picture":"https://picsum.photos/200" },' +
//   '{"title":"CSS","desc":"Natan","picture":"https://picsum.photos/200" },' +
//   '{"title":"SQL","desc":"Jorge","picture":"https://picsum.photos/200" },' +
//   '{"title":"Python","desc":"Leo","picture":"https://picsum.photos/200" },' +
//   '{"title":"Java","desc":"Pauline","picture":"https://picsum.photos/200" },' +
//   '{"title":"Bash","desc":"Hamza","picture":"https://picsum.photos/200" },' +
//   '{"title":"Powershell","desc":"Julien","picture":"https://picsum.photos/200" },' +
//   '{"title":"C#","desc":"Karolos","picture":"https://picsum.photos/200" },' +
//   '{"title":"PHP","desc":"Antoine","picture":"https://picsum.photos/200" },' +
//   '{"title":"C++","desc":"Vola","picture":"https://picsum.photos/200" },' +
//   '{"title":"TypeScript","desc":"Vola","picture":"https://picsum.photos/200" },' +
//   '{"title":"C","desc":"Vola","picture":"https://picsum.photos/200" },' +
//   '{"title":"Ruby","desc":"Vola","picture":"https://picsum.photos/200" },' +
//   '{"title":"Go","desc":"Vola","picture":"https://picsum.photos/200" },' +
//   '{"title":"Assembly","desc":"Vola","picture":"https://picsum.photos/200" },' +
//   '{"title":"Swift","desc":"Vola","picture":"https://picsum.photos/200" },' +
//   '{"title":"Kotlin","desc":"Vola","picture":"https://picsum.photos/200" },' +
//   '{"title":"R","desc":"Vola","picture":"https://picsum.photos/200" },' +
//   '{"title":"VBA","desc":"Vola","picture":"https://picsum.photos/200" },' +
//   '{"title":"Objective-C","desc":"Vola","picture":"https://picsum.photos/200" },' +
//   '{"title":"Scala","desc":"Vola","picture":"https://picsum.photos/200" },' +
//   '{"title":"Rust","desc":"Vola","picture":"https://picsum.photos/200" },' +
//   '{"title":"Dart","desc":"Vola","picture":"https://picsum.photos/200" },' +
//   '{"title":"Elixir","desc":"Vola","picture":"https://picsum.photos/200" },' +
//   '{"title":"Clojure","desc":"Vola","picture":"https://picsum.photos/200" },' +
//   '{"title":"WebAssembly","desc":"Chris","picture":"https://picsum.photos/200" }]}';

const table = [
  Html,
  Css,
  SQL,
  Javascript,
  Python,
  Bash,
  Powershell,
  CSharp,
  PHP,
  CPlusPlus,
  TypeScript,
  C,
  Cdiese,
  Ruby,
  Go,
  Assembly,
  Swift,
  Kotlin,
  R,
  VBA,
  ObjectiveC,
  Scala,
  Rust,
  Dart,
  Elixir,
  Clojure,
  WebAssembly,
];
