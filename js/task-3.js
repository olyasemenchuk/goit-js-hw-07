const input = document.querySelector("#name-input")
const greetingSpan = document.querySelector("#name-output")
input.addEventListener("input", getTheName)


function getTheName(event) {
    const newName = event.target.value.trim();
    if (newName === "") {
        greetingSpan.textContent = "Anonymous"
    } else { greetingSpan.textContent = newName; }

}


