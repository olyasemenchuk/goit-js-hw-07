const button = document.querySelector(".change-color");
button.addEventListener("click", changeColor)

const backgroundColor = document.querySelector("body");
const backgroundSpan = document.querySelector(".color")
function changeColor(event) {
  backgroundColor.style.backgroundColor = getRandomHexColor();
  backgroundSpan.textContent = getRandomHexColor();
}
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

