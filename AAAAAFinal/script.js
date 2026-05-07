let overlay = document.querySelector("#overlay");
let bg = document.querySelector("#bg");
let text = document.querySelector("#text");
let audio = document.querySelector("#alarm");
let start = document.querySelector("#start");
let credit = document.querySelector(".credit");

let diaryLink = document.querySelector("#diary-link");
let popup = document.querySelector("#computer-popup");
let closeBtn = document.querySelector(".close-btn");

start.addEventListener("click", function () {
    audio.play();

    start.style.opacity = "0";
    start.style.pointerEvents = "none";

    credit.style.opacity = "0";

    setTimeout(function () {
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";

        bg.style.opacity = "1";
    }, 500);

    setTimeout(function () {
        text.style.opacity = "1";
    }, 2000);
});

diaryLink.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.add("active");
});

closeBtn.addEventListener("click", function () {
    window.location.href = "Recover.html";
});