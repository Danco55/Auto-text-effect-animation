const containerEl = document.querySelector(".container");
const careers = ["Hello", "my", "name", "is", "Daniel"];

const container2El = document.querySelector(".container2");
const careers2 = ["Frontend developer", "Programmer", "Freelancer", "Backend eveloper", "I AM AM AM AM AM AM"];

const container3El = document.querySelector(".container3");
const careers3 = ["Programming", "Block chain development", "Chess", "sport", "reading"];


let careerIndex = 0; 
let characterIndex = 0;
let careerIndex2 = 0;
let characterIndex2 = 0;
let careerIndex3 = 0;
let characterIndex3 = 0;


updateText();
function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h1> ${careers[careerIndex] === "" ? "" : ""} ${careers[
    careerIndex].slice(0, characterIndex)}</h1>`;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 150);
}

updateText2();
function updateText2() {
  characterIndex2++;
  container2El.innerHTML = `
    <h1>I am ${careers2[careerIndex2] === "I" ? "an" : "a"} ${careers2[
    careerIndex2].slice(0, characterIndex2)}</h1>`;

  if (characterIndex2 === careers2[careerIndex2].length) {
    careerIndex2++;
    characterIndex2 = 0;
  } 

  if (careerIndex2 === careers2.length) {
    careerIndex2 = 0;
  }
  setTimeout(updateText2, 80);
}

updateText3();
function updateText3() {
  characterIndex3++;
  container3El.innerHTML = `
    <h1>My hobbies ${careers3[careerIndex3] === "" ? "" : "are"} ${careers3[
    careerIndex3].slice(0, characterIndex3)}</h1>`;

  if (characterIndex3 === careers3[careerIndex3].length) {
    careerIndex3++;
    characterIndex3 = 0;
  }

  if (careerIndex3 === careers3.length) {
    careerIndex3 = 0;
  }
  setTimeout(updateText3, 130);
}
