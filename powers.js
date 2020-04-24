const flightEl = document.querySelector("#activate-flight");
const flightSectionEl = document.querySelector("#flight");

const mindreadingEl = document.querySelector("#activate-mindreading");
const mindreadingSectionEl = document.querySelector("#mindreading");

const xrayEl = document.querySelector("#activate-xray");
const xraySectionEl = document.querySelector("#xray");

const activateAllButton = document.querySelector("#activate-all")
const activateAllNode = document.querySelectorAll("section");

const deactivateAllButton = document.querySelector("#deactivate-all");
const deactivateAllNode = document.querySelectorAll("section");

const flightHandlerFunction = (event) => {
  flightSectionEl.classList.remove("disabled");
  flightSectionEl.classList.add("enabled");
}
const mindreadingHandlerFunction = (event) => {
  mindreadingSectionEl.classList.remove("disabled");
  mindreadingSectionEl.classList.add("enabled");
}
const xrayHandlerFunction = (event) => {
  xraySectionEl.classList.remove("disabled");
  xraySectionEl.classList.add("enabled");
}

const activateAll = () => {
  flightHandlerFunction();
  mindreadingHandlerFunction();
  xrayHandlerFunction();
}

const deactivateAll = () => {
  for (let i = 0; i < deactivateAllNode.length; i++) {
    deactivateAllNode.item(i).classList.remove("enabled");
    deactivateAllNode.item(i).classList.add("disabled");
  }
}

flightEl.addEventListener("click", flightHandlerFunction);
mindreadingEl.addEventListener("click", mindreadingHandlerFunction);
xrayEl.addEventListener("click", xrayHandlerFunction);
activateAllButton.addEventListener("click", activateAll);
deactivateAllButton.addEventListener("click", deactivateAll)