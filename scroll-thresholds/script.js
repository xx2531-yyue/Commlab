function windowWasScrolled(){
    let percentage =getScrolledPercentage();
    console.log("percentage",percentage);

    if (percentage > 33){
        console.log("p1 is in view");
        document.querySelector(".one p").style.transform = "rotate(360deg)";
    }else{
        document.querySelector(".one p").style.transform = "rotate(0deg)";
    }

    if (percentage > 77){
        console.log("p2 is in view");
        document.querySelector(".two p").style.transform = "scale(2)";
        document.querySelector(".two").style.backgroundColor = "yellow";
    }else{
        document.querySelector(".two p").style.transform = "scale(0.1)";
        document.querySelector(".two").style.backgroundColor = "rgb(119, 2, 236);";
    }

    let cat_x_max = window.innerWidth;
    let cat_x= x_max*(percentage/100);
    document.querySelector(#catImg).style.transform = translate("+cat_x+",50px)";
}

window.addEventListener("scroll",windowWasScrolled);






function getScrolledPercentage(){

    let scrolledAlready = window.scrollY;

    let pageHeight = document.body.scrollHeight;

    let windowHeight = window.innerHeight;

    let possibleScrollspace = pageHeight - windowHeight;

    // console.log(scrolledAlready,possibleScrollspace);

    let percentage = (scrolledAlready/ possibleScrollspace)*100;

    return percentage;
}


