let overlay = document.querySelector("#overlay");
let bg = document.querySelector("#bg");
let text = document.querySelector("#text");
let audio = document.querySelector("#alarm");
let start = document.querySelector("#start");

start.addEventListener("click", startExperience);

function startExperience() {
    console.log("start");

    audio.play();
    start.style.opacity = 0;
    setTimeout(() => {
        bg.style.opacity = 1;
        overlay.style.opacity = 0;
    }, 500);

    setTimeout(() => {
        text.style.opacity = 1;
    }, 2000);
}