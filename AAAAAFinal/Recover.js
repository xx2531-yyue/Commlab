window.addEventListener("scroll", function () {

    let arrow = document.querySelector(".scroll-arrow");
    
    if (window.scrollY > 50) {
        arrow.style.opacity = "0";
    } else {
        arrow.style.opacity = "1";
    }

    let images = document.querySelectorAll(".fade-in-img, .zoom-img");

    images.forEach(function(img, index) {

        if (window.scrollY > index * 400) {
            img.classList.add("active");
        } else {
            img.classList.remove("active");
        }

    });

});


let nextButton = document.querySelector("#nextTrigger");

nextButton.addEventListener("click", function () {

    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = "0";

    setTimeout(function () {

        window.location.href = "Restaurant.html";

    }, 1000);

});