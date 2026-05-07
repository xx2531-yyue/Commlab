window.addEventListener("scroll", windowWasScrolled);

function windowWasScrolled() {
    let percentage = getScrolledPercentage();


if (percentage < 30) {

    document.querySelector("#bg1").style.opacity = "1";
    document.querySelector("#bg2").style.opacity = "0";
    document.querySelector("#bg3").style.opacity = "0";
}



else if (percentage < 90) {

    document.querySelector("#bg1").style.opacity = "0";
    document.querySelector("#bg2").style.opacity = "1";
    document.querySelector("#bg3").style.opacity = "0";
}


else {

    document.querySelector("#bg1").style.opacity = "0";
    document.querySelector("#bg2").style.opacity = "0";
    document.querySelector("#bg3").style.opacity = "1";
}


    // line 1
    if (percentage > 5) {
        document.querySelector("#line1").style.opacity = "1";
        document.querySelector("#line1").style.transform = "translateY(0px)";
    } else {
        document.querySelector("#line1").style.opacity = "0";
        document.querySelector("#line1").style.transform = "translateY(30px)";
    }

    // line 2
    if (percentage > 10) {
        document.querySelector("#line2").style.opacity = "1";
        document.querySelector("#line2").style.transform = "translateY(0px)";
    } else {
        document.querySelector("#line2").style.opacity = "0";
        document.querySelector("#line2").style.transform = "translateY(30px)";
    }

    // line 3
    if (percentage > 15) {
        document.querySelector("#line3").style.opacity = "1";
        document.querySelector("#line3").style.transform = "translateY(0px)";
    } else {
        document.querySelector("#line3").style.opacity = "0";
        document.querySelector("#line3").style.transform = "translateY(30px)";
    }

    // line 4
    if (percentage > 20) {
        document.querySelector("#line4").style.opacity = "1";
        document.querySelector("#line4").style.transform = "translateY(0px)";
    } else {
        document.querySelector("#line4").style.opacity = "0";
        document.querySelector("#line4").style.transform = "translateY(30px)";
    }

    // line 5
    if (percentage > 38) {
        document.querySelector("#line5").style.opacity = "1";
        document.querySelector("#line5").style.transform = "translateY(0px)";
    } else {
        document.querySelector("#line5").style.opacity = "0";
        document.querySelector("#line5").style.transform = "translateY(30px)";
    }

    // line 6
    if (percentage > 48) {
        document.querySelector("#line6").style.opacity = "1";
        document.querySelector("#line6").style.transform = "translateY(0px)";
    } else {
        document.querySelector("#line6").style.opacity = "0";
        document.querySelector("#line6").style.transform = "translateY(30px)";
    }

    // line 7
    if (percentage > 58) {
        document.querySelector("#line7").style.opacity = "1";
        document.querySelector("#line7").style.transform = "translateY(0px)";
    } else {
        document.querySelector("#line7").style.opacity = "0";
        document.querySelector("#line7").style.transform = "translateY(30px)";
    }


    // line 8
    if (percentage > 75) {
        document.querySelector("#line8").style.opacity = "1";
        document.querySelector("#line8").style.transform = "translateY(0px)";
    } else {
        document.querySelector("#line8").style.opacity = "0";
        document.querySelector("#line8").style.transform = "translateY(30px)";
    }

    let arrow = document.querySelector("#scrollArrow");
    if (percentage > 5) {
        arrow.classList.add("hidden");
    } else {
        arrow.classList.remove("hidden");
    }
}

function getScrolledPercentage() {
    let scrolledAlready = window.scrollY;
    let pageHeight = document.body.scrollHeight;
    let windowHeight = window.innerHeight;
    let possibleScrollspace = pageHeight - windowHeight;

    if (possibleScrollspace <= 0) return 0;

    return (scrolledAlready / possibleScrollspace) * 100;
}

function goToTargetPage() {
    let targetUrl = "target.html";
    setTimeout(function() {
        window.location.href = targetUrl;
    }, 500);
}