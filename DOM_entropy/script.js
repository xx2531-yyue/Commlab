let button = document.querySelector("#startBtn");
let container = document.querySelector(".container");
let textString = "MEANINGLESS";

//🌟learnt how to get random color
function randomColor() {
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
}

function createLetter(letter) {
    let span = document.createElement("span");
    span.innerText = letter;
    span.className = "letter";

    span.style.left = Math.random() * window.innerWidth + "px";
    span.style.top = Math.random() * window.innerHeight + "px";
    span.style.fontSize = (Math.random() * 30 + 10) + "px";
    span.style.color = randomColor();
    span.style.opacity = Math.random();

    container.append(span);
}

button.onclick = function() {
    for (let i = 0; i < textString.length; i++) {
        createLetter(textString[i]);
    }
};