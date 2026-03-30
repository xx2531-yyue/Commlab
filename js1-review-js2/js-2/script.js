let container = document.querySelector(".boxContainer");

//define functions


function addParagraph(){
    //create an element in JS world
    let paragraph = document.createElement('p');

    paragraph.innerText = "does it work?"


    //put the element on the page
    document.body.append(paragraph);
}

function addBox(){
    //create an element in JS world
    let box = document.createElement("div");

    box.className = "box";

    //append box to the container
    container.append(box);
}
function removeAll(){
    container.remove();
}

function moveContainer(){

    let randomNumber = (Math.random()*200)-100;
    console.log(randomNumber);
    container.style.left = randomNumber + "px";
}