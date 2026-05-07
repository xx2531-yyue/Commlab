let timeDisplay = document.querySelector("#time");
let rgbDisplay = document.querySelector("#rgb");
let startBtn = document.querySelector("#startBtn");
let tickSound = document.querySelector("#tickSound");

let timer;

function updateClock() {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    timeDisplay.innerText = hours + ":" + minutes + ":" + seconds;

    let r = hours * 10;
    let g = minutes * 4;
    let b = seconds * 4;

    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    rgbDisplay.innerText = "rgb(" + r + ", " + g + ", " + b + ")";

    tickSound.currentTime = 0;
    tickSound.play();
}

startBtn.addEventListener("click", function () {

    if (!timer) {
        updateClock();
        timer = setInterval(updateClock, 1000);
    }

});