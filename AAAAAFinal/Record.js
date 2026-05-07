window.addEventListener("scroll", scrollEffects);

function scrollEffects() {

    let scrollY = window.scrollY;

    let diary = document.querySelector(".center-container");
    let blackScreen = document.querySelector("#blackScreen");
    let memoryBg = document.querySelector("#memoryBg");
    let memoryDiary = document.querySelector(".memory-diary");
    let stickyNote = document.querySelector("#stickyNote");
    let backgrounds = document.querySelector(".backgrounds");

    let bg1 = document.querySelector("#bg1");
    let bg2 = document.querySelector("#bg2");
    let bg3 = document.querySelector("#bg3");
    let bg4 = document.querySelector("#bg4");

    let text1 = document.querySelector("#text1");
    let text2 = document.querySelector("#text2");
    let text3 = document.querySelector("#text3");
    let text4 = document.querySelector("#text4");

    if (scrollY > 100) {
        diary.classList.add("show");
    }

    bg1.classList.remove("active");
    bg2.classList.remove("active");
    bg3.classList.remove("active");
    bg4.classList.remove("active");

    if (scrollY < 1800) {
        bg1.classList.add("active");
    } else if (scrollY < 3600) {
        bg2.classList.add("active");
    } else if (scrollY < 5200) {
        bg3.classList.add("active");
    } else {
        bg4.classList.add("active");
    }

    if (scrollY > 600) {
        text1.classList.add("show");
    }

    if (scrollY > 2200) {
        text2.classList.add("show");
    }

    if (scrollY > 3800) {
        text3.classList.add("show");
    }

    if (scrollY > 5200) {
        text4.classList.add("show");
    }

    if (scrollY > 7000) {
        diary.classList.add("leave");
        blackScreen.classList.add("show");
    }

    if (scrollY > 8200) {
        blackScreen.classList.remove("show");
        backgrounds.classList.add("hideBackgrounds");
        memoryBg.classList.add("show");
        memoryDiary.classList.add("show");
    }

    if (scrollY > 11000) {
        memoryBg.classList.add("fadeOut");
    }

    if (scrollY > 12400) {
        stickyNote.classList.add("show");
    }

    if (scrollY > 14200) {
        stickyNote.classList.add("attach");
    }
}

let memoryTexts = document.querySelectorAll(".memoryText");
let blurLevel = 20;

memoryTexts.forEach(function(text) {
    text.addEventListener("click", function() {
        text.classList.add("clear");
        blurLevel -= 5;
        if (blurLevel < 0) blurLevel = 0;
        document.querySelector("#memoryBg").style.filter = "blur(" + blurLevel + "px)";
    });
});