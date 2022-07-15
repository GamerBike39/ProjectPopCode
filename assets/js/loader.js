VanillaCounter();

let loader = document.querySelector(".containerLoader");
let transi = document.querySelector(".containerTransi");
let home = document.querySelector(".containerAccueil");
let jeu = document.querySelector(".containerJeu");
let body = document.querySelector(".bg");
let img = document.querySelector(".chambre");
let traitZoom = document.querySelector(".traitZoomB");
let overlayDesc = document.querySelector(".overlayDesc");

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
        fetch("./assets/json/liste.json")
          .then((reponse) => reponse.json())
          .then((data) => {
            for (i = 0; i < data.length; i++) {
              if (data[i].language === reponseText.innerHTML.toLowerCase()) {
                overlayDesc.innerHTML = `<h1>${data[i].language}</h1>  <img src=${data[i].img} alt="logo">
      <p>${data[i].desc}</p> <a target="_blank" href='${data[i].url}'>wiki</a>`;
              }
            }
            reponseDelete();
            reponseNone();
          });
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
  img.addEventListener("wheel", function (e) {
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
