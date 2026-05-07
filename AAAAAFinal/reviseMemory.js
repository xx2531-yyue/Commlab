window.addEventListener("scroll", function() {

    let scenes = document.querySelectorAll(".scene");
    let scrollY = window.scrollY;
    let winH = window.innerHeight;

    scenes.forEach(function(scene) {

        let sTop = scene.offsetTop;
        let sHeight = scene.offsetHeight;

        let scrollDist = sHeight - winH;

        if (scrollDist <= 0) {
            scrollDist = 1;
        }

        let progress = (scrollY - sTop) / scrollDist;

        if (progress < 0) {
            progress = 0;
        }

        if (progress > 1) {
            progress = 1;
        }

        let wrapper = scene.querySelector(".sticky-wrapper");

        let firstBG = wrapper.querySelector(".bg:nth-child(1)");
        let secondBG = wrapper.querySelector(".bg:nth-child(2)");

        let content = scene.querySelector(".content");

        let firstText = content.querySelector("h1:nth-child(1)");
        let secondText = content.querySelector("h1:nth-child(2)");

        if (firstBG && secondBG) {

            let fade = (progress - 0.1) / 0.8;

            if (fade < 0) {
                fade = 0;
            }

            if (fade > 1) {
                fade = 1;
            }

            firstBG.style.opacity = 1;

            secondBG.style.opacity = fade;

            if (firstText && secondText) {

                firstText.style.opacity = 1 - fade;

                secondText.style.opacity = fade;
            }
        }
    });



    let endingScene = document.querySelector(".endingScene");

    let endingTop = endingScene.offsetTop;

    let endingHeight = endingScene.offsetHeight;

    let endingProgress = (scrollY - endingTop) / (endingHeight - winH);

    if (endingProgress < 0) {
        endingProgress = 0;
    }

    if (endingProgress > 1) {
        endingProgress = 1;
    }

    let endingImg1 = document.querySelector("#endingImg1");

    let endingImg2 = document.querySelector("#endingImg2");

    let movieCurtain = document.querySelector("#movieCurtain");



    if (endingProgress > 0.15) {

        endingImg1.classList.add("show");
    }



    if (endingProgress > 0.4) {

        endingImg2.classList.add("show");
    }



    if (endingProgress > 0.7) {

        movieCurtain.classList.add("show");
    }

});