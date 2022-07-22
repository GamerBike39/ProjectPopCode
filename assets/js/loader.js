VanillaCounter();

const loader = document.querySelector(".containerLoader");
const transi = document.querySelector(".containerTransi");
const home = document.querySelector(".containerAccueil");
const jeu = document.querySelector(".containerJeu");
const body = document.querySelector(".bg");
const img = document.querySelector(".chambre");
const traitZoom = document.querySelector(".traitZoomB");
const overlayDesc = document.querySelector(".overlayDesc");
const overlayDescContainer = document.querySelector(".overlayDescContainer");
const btnCheck = document.querySelector(
  ".overlayDescContainer > div:nth-child(1)"
);
const overlayGameOver = document.querySelector(".overlayGameOver");
const btnReset = document.querySelector(".reset");
const gameWin = document.querySelector(".gameWin");
const sectionZoom = document.querySelector(".sectionZoom");

// ************************Curseur custom************************
let cursor = document.querySelector(".cursor");
let cursorinner = document.querySelector(".cursor2");
let a = document.querySelectorAll("a");
let p = document.querySelectorAll("p");

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${
    e.clientY
  }px - 50%), 0) rotate(${x + y}deg)`;
});

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});
p.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});
// ************************************************************
// **********************Loader********************
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
// ************************************************************

// ********************btn start game********************
const beginGame = document.querySelector(".beginGame");
beginGame.addEventListener("click", () => {
  home.classList.remove("flex");
  home.classList.add("displayNone");
  body.classList.remove("bgAccueil");
  jeu.classList.remove("displayNone");
  sectionZoom.classList.remove("displayNone");
  sectionZoom.classList.add("flex");
  gameEngine();
});

// btnReset.addEventListener("click", () => {
//   localStorage.clear();
//   score.textContent = "0";
//   scoreCompteur = 0;
//   error[0].style.color = "#7a7878";
//   error[1].style.color = "#7a7878";
//   error[2].style.color = "#7a7878";
//   errorNumber = 0;
//   arrayReponse.length = 0;
//   dejaTrouveP.innerHTML = "";
//   jeu.classList.remove("displayNone");
//   overlayGameOver.classList.add("displayNone");
//   overlayGameOver.classList.remove("dfjcic");
// });
// ***************************************

// ********************* Responsive *****************************
const responsivePop = document.querySelector(".responsivePop");
new ResizeObserver((entries) => {
  if (entries[0].contentRect.width <= 900) {
    console.log("entries[0]");
    responsivePop.classList.remove("displayNone");
    responsivePop.classList.add("flex");
    home.classList.add("displayNone");
    home.classList.remove("flex");
  } else {
    responsivePop.classList.remove("flex");
    responsivePop.classList.add("displayNone");
  }
}).observe(document.body);
// ***************************************************************

// **** réponse et analyse du jeu *******

const lang = [
  "Javascript",
  "Html",
  "Css",
  "SQL",
  "Python",
  "Java",
  "Bash",
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
const langMaj = lang.map((e) => {
  return e.toUpperCase();
});

function errorPrevent() {
  if (reponseText.textContent === "JS") {
    reponseText.textContent = "JAVASCRIPT";
    console.log("ok");
  }
  if (reponseText.textContent === "VISUAL BASIC") {
    reponseText.textContent = "VBA";
  }
  if (
    reponseText.textContent === "OBJ-C" ||
    reponseText.textContent === "OBJECTIVEC" ||
    reponseText.textContent === "OBJECTIVE C"
  ) {
    reponseText.textContent = "OBJECTIVE-C";
  }
  if (reponseText.textContent === "TS") {
    reponseText.textContent = "TYPESCRIPT";
  }
  if (reponseText.textContent === "WBA") {
    reponseText.textContent = "WEBASSEMBLY";
  }
}

const arrayReponse = [];

const reponse = document.querySelector(".overlayReponse");
const reponseText = document.querySelector(".overlayReponse p:first-child");
const reponseTextResult = document.querySelector(
  ".overlayReponse p:nth-child(3)"
);
const dejaTrouveBtn = document.querySelector(".langagesFound");
const dejaTrouveP = document.querySelector(
  ".overlayReponseTrouvee > div > span"
);
const dejaTrouveDiv = document.querySelector(".overlayReponseTrouvee");

function dejaTrouveClose() {
  dejaTrouveDiv.classList.add("displayNone");
  dejaTrouveDiv.classList.remove("flex");
}

function closeTrouve() {
  document.querySelector(".closeTrouve").addEventListener("click", () => {
    dejaTrouveClose();
  });
}
closeTrouve();

// **** compteur de bonnes réponses et erreurs *******
const error = document.querySelectorAll(".echoue>div");
let errorNumber = 0;
const score = document.querySelector(".trouve div:nth-child(1)");
let scoreCompteur = 0;
// *********************************************************

//************************ */ close overlay *******************
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

function overlayDescNone() {
  overlayDesc.classList.add("displayNone");
  overlayDesc.classList.remove("flex");
  overlayDescContainer.classList.add("displayNone");
  overlayDescContainer.classList.remove("flex");
}
function closeTimer() {
  if (btnCheck.childNodes[3].checked === true) {
    overlayDescNone();
  }
}
closeTimer();
// *************************************************************

// *********************** event listerner KeyDown GameEngine ***********************
function gameEngine() {
  document.querySelector("body").addEventListener("keydown", (e) => {
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
      e.key === "A" ||
      e.key === "B" ||
      e.key === "C" ||
      e.key === "D" ||
      e.key === "E" ||
      e.key === "F" ||
      e.key === "G" ||
      e.key === "H" ||
      e.key === "I" ||
      e.key === "J" ||
      e.key === "K" ||
      e.key === "L" ||
      e.key === "M" ||
      e.key === "N" ||
      e.key === "O" ||
      e.key === "P" ||
      e.key === "Q" ||
      e.key === "R" ||
      e.key === "S" ||
      e.key === "T" ||
      e.key === "U" ||
      e.key === "V" ||
      e.key === "W" ||
      e.key === "X" ||
      e.key === "Y" ||
      e.key === "Z" ||
      e.key === " " ||
      e.key === "+" ||
      e.key === "-" ||
      e.key === "#"
    ) {
      reponseShow();
      reponseText.textContent += e.key.toUpperCase();
      dejaTrouveClose();
      overlayDescNone();
      errorPrevent();
    }
    if (e.key === " " && reponseText.textContent.length <= 1) {
      reponseText.textContent = "";
    }
    if (e.key === "Enter" && langMaj.includes(reponseText.textContent)) {
      arrayReponse.push(reponseText.textContent);
      let unique = [...new Set(arrayReponse)];
      closeTrouve();
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
        }, 600);
        return;
      }
      reponseTextResult.textContent = "bonne réponse";
      scoreCompteur++;
      score.textContent = scoreCompteur;
      if (scoreCompteur === 27) {
        jeu.classList.add("displayNone");
        scoreCompteur = 0;
        errorNumber = 0;
        reponseDelete();
        reponseNone();
        gameWin.classList.remove("displayNone");
        gameWin.classList.add("dfjcic");
        localStorage.clear();
      }
      setTimeout(() => {
        fetch("./assets/json/liste.json")
          .then((reponse) => reponse.json())
          .then((data) => {
            for (i = 0; i < data.length; i++) {
              if (data[i].language === reponseText.textContent.toLowerCase()) {
                overlayDesc.innerHTML = ` <div><h1>${data[i].language}</h1><img src=${data[i].img} alt="logo"></div>
              <div><div><img class="closeModale" src="assets/img/closeBtn.svg"></div> <p>${data[i].desc}</p><a target="_blank" href='${data[i].url}' style="color: #FFAAFF;">wikipedia</a></div>`;
                overlayDescContainer.classList.remove("displayNone");
                overlayDescContainer.classList.add("flex");
                overlayDesc.classList.remove("displayNone");
                overlayDesc.classList.add("flex");
                dejaTrouveP.innerHTML += `<p class="dfjcic" style="gap: 12px; padding-left: 10px">${data[i].language}<img style="width: 35%; padding-right: 10px; height: 70px;" src=${data[i].img} alt="logo"></p>`;
                dejaTrouveDesc.innerHTML = ` <div><img src=${data[i].img} alt="logo"></div>
                <div><h1>${data[i].language}</h1> <p>${data[i].desc}</p> <a target="_blank" href='${data[i].url}' style="color: #FFAAFF;">wikipedia</a></div>`;
                closeTimer();
                document
                  .querySelector(".closeModale")
                  .addEventListener("click", () => {
                    overlayDescNone();
                  });
                break;
              }
            }
            reponseDelete();
            reponseNone();
          });
      }, 600);
      return;
    }
    if (
      (e.key === "Enter" && reponseText.textContent === "") ||
      reponseText.textContent === "Vous avez déjà trouvé ce langage" ||
      reponseTextResult.textContent === "mauvaise réponse" ||
      reponseTextResult.textContent === "Vous avez perdu"
    ) {
      e.preventDefault();
      reponseDelete();
      reponseNone();
      overlayDescNone();
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
        reponseTextResult.textContent = "Vous avez perdu";
        overlayGameOver.classList.remove("displayNone");
        overlayGameOver.classList.add("dfjcic");
        overlayGameOver.childNodes[5].innerHTML = `<p class="plusgros">Vous avez trouvé <strong>${scoreCompteur}</strong> langages sur 27</p>`;
        localStorage.clear();
        scoreCompteur = 0;
        errorNumber = errorNumber - 3;
        reponseDelete();
        reponseNone();
        jeu.classList.add("displayNone");
      }
      setTimeout(() => {
        reponseDelete();
        reponseNone();
        overlayDescNone();
      }, 600);
      return;
    }
    if (e.key === "Escape") {
      reponseNone();
      reponseDelete();
      overlayDescNone();
      dejaTrouveDiv.classList.add("displayNone");
      dejaTrouveDiv.classList.remove("flex");
    }
    if (e.key === "Backspace") {
      reponseText.textContent = reponseText.textContent.slice(0, -1);
    }
    saveScore();
    if (overlayGameOver.classList.contains("dfjcic") === true) {
      reponseDelete();
      reponseNone();
    }
    e.stopPropagation();
  });
}

function saveScore() {
  localStorage.setItem("scoreCompteur", scoreCompteur);
  localStorage.setItem("errorNumber", errorNumber);
  localStorage.setItem("arrayReponse", arrayReponse);
  localStorage.setItem("dejaTrouveP", dejaTrouveP.innerHTML);
}

// ***** barre zoom *******************
function remplirZoom() {
  img.addEventListener("wheel", function (e) {
    for (i = 0; i < img.dataset.scale; i++) {
      traitZoom.style.height = `${i}0%`;
      e.preventDefault();
    }
  });
}
remplirZoom();

// ****** modale déja trouvée  et timer desc *******
dejaTrouveBtn.addEventListener("click", () => {
  dejaTrouveDiv.classList.toggle("displayNone");
  dejaTrouveDiv.classList.toggle("flex");
  closeTrouve();
  descTrouve();
  overlayDescNone();
});

const dejaTrouveDesc = document.querySelector(".overlayReponseTrouvee > desc");
//  dejaTrouveP.childNodes[i].textContent
async function descTrouve() {
  for (let i = 0; i < dejaTrouveP.childNodes.length; i++) {
    dejaTrouveP.childNodes[i].addEventListener("mouseover", () => {
      console.log("ok");
      console.log(dejaTrouveP.childNodes[i].textContent);
      fetch("./assets/json/liste.json")
        .then((response) => response.json())
        .then((data) => {
          for (let z = 0; z < data.length; z++) {
            if (
              data[z].language ===
              dejaTrouveP.childNodes[i].textContent.toLowerCase()
            ) {
              dejaTrouveDesc.innerHTML = ` <div><img src=${data[z].img} alt="logo"></div>
              <div><h1>${data[z].language}</h1> <p>${data[z].desc}</p> <a target="_blank" href='${data[z].url}' style="color: #FFAAFF;">wikipedia</a></div>`;
            }
            dejaTrouveP.childNodes[i].addEventListener("mouseover", () => {
              cursor.classList.add("hover");
            });
            dejaTrouveP.childNodes[i].addEventListener("mouseleave", () => {
              cursor.classList.remove("hover");
            });
          }
        });
    });
  }
}

// mention legales
const mentionLegales = document.querySelector(".overlayMentionLegales");
const btnMentionLegales = document.querySelector(".btnMentionLegales");
btnMentionLegales.addEventListener("click", () => {
  mentionLegales.classList.toggle("displayNone");
  fetch("./assets/json/liste.json")
    .then((response) => response.json())
    .then((data) => {
      for (let z = 0; z < data.length; z++) {
        if (data[z].title === btnMentionLegales.textContent) {
          mentionLegales.childNodes[3].innerHTML = `<p>${data[z].title}</p> ${data[z].content}`;
        }
      }
    });
});

const closeM = document.querySelector(".closeM");
closeM.addEventListener("click", () => {
  console.log("ok");
  mentionLegales.classList.toggle("displayNone");
});
// ************************************************************
// counter
function VanillaCounter() {
  let elements = document.querySelectorAll("[data-vanilla-counter]");
  elements.forEach((i) => {
    let data = {
      startAt: parseInt(i.getAttribute("data-start-at")),
      endAt: parseInt(i.getAttribute("data-end-at")),
      delay: parseInt(i.getAttribute("data-delay")) || 0,
      format: "{}",
      time: parseInt(i.getAttribute("data-time")) || 1000,
    };
    if (i.getAttribute("data-format")) {
      data.format = i.getAttribute("data-format");
    } else if (i.innerHTML != "") {
      data.format = i.innerHTML;
    }
    console.log(data.format);
    if (data.startAt == null) {
      throw new Error("data-start-at attribute is required");
    }
    if (data.endAt == null) {
      throw new Error("data-end-at attribute is required");
    }
    var counter = data.startAt;
    i.innerHTML = data.format.replace("{}", counter);
    var intervalTime = Math.ceil(data.time / (data.endAt - data.startAt));
    setTimeout(() => {
      var interval = setInterval(intervalHandler, intervalTime);
      function intervalHandler() {
        counter +=
          ((data.endAt - data.startAt) / Math.abs(data.endAt - data.startAt)) *
          1;
        i.innerHTML = data.format.replace("{}", counter);
        if (counter == data.endAt) {
          clearInterval(interval);
        }
      }
    }, data.delay);
  });
}
window.VanillaCounter = VanillaCounter;

// sauvegarde
// continuer avec les données stockés dans saveScore
// function continuer() {
//   scoreCompteur = localStorage.getItem("scoreCompteur");
//   errorNumber = localStorage.getItem("errorNumber");
//   arrayReponse.push(localStorage.getItem("arrayReponse"));
//   dejaTrouveP.innerHTML = localStorage.getItem("dejaTrouveP");
//   score.textContent = localStorage.getItem("scoreCompteur", scoreCompteur);
//   if (localStorage.getItem("errorNumber") === "1") {
//     error[0].style.color = "#0aeff7";
//   }
//   if (localStorage.getItem("errorNumber") === "2") {
//     error[1].style.color = "#0aeff7";
//   }
// }

// const continueBtn = document.querySelector(".continueBtn");
// if (localStorage.getItem("errorNumber") === null) {
//   continueBtn.style.display = "none";
// } else {
//   continueBtn.style.display = "block";
// }

// continueBtn.addEventListener("click", () => {
//   home.classList.remove("flex");
//   home.classList.add("displayNone");
//   body.classList.remove("bgAccueil");
//   jeu.classList.remove("displayNone");
//   sectionZoom.classList.remove("displayNone");
//   sectionZoom.classList.add("flex");
//   continuer();
//   gameEngine();
// });

// bouton save exits
// const saveExit = document.querySelector(".saveExit");
// saveExit.addEventListener("click", () => {
//   window.close();
// });
