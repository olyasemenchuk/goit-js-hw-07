const button = document.querySelector(".change-color");
button.addEventListener("click", changeColor)

const backgroundColor = document.querySelector("body");
const backgroundSpan = document.querySelector(".color")
function changeColor(event) {
  const color = getRandomHexColor();
  backgroundColor.style.backgroundColor = color;
  backgroundSpan.textContent = color;
}
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

