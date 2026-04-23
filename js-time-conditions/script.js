let inputBox = document.querySelector("#inputBox") // = select the input element
let output = document.querySelector("#output")// = select the output div
let myButton = document.querySelector("#myButton")// = select the button
let clickCounter = 0;

// challenge 1: 
// when the button is clicked
// change the styling of the output text
function buttonClicked(){
    output.style.color = "red";
    output.style.backgroundColor = "pink";

    clickCounter = clickCounter + 1;
    console.log("clickcounter",clickCounter)

    if (clickCounter > 10){
        supersize(myButton);
    }

}

myButton.addEventListener("click",buttonClicked);

// challenge 2: 
// as we type into the input box, 
// the text should appear inside the "ouput" p tag:

inputBox.addEventListener("input",inputChanged)

function inputChanged(eventInfo){
    let text = inputBox.value;
    //check if the value inside the input is "spin"
    if (text == "spin"){
        console.log("the value is spin!!!")
        spin(inputBox);
    }

    //reflect the current text in output
    output.innerText = text;


}







// function to spin an element 
angle = 0;
function spin(element){
    angle = angle + 360;
    element.style.transition = "all 1s linear"
    element.style.transform = "rotate("+angle+"deg)"
}



// -------- PART 2








let messageBoard = document.querySelector("#messageBoard");


function appendCountdown(){
    let clicksLeft = 10 - clickCounter;
    addMessage("press the button "+clicksLeft+" times");
}

// appendCountdown();
setInterval(appendCountdown,200);







// function to add text to the div with id "messageboard"
function addMessage(messagetext){
    let p = document.createElement("p");
    p.innerText = messagetext;
    messageBoard.prepend(p);
}

// function to rapidly increase the size of an element
function supersize(element){
    element.style.transition = "all .5s linear"
    element.style.transform = "scale(100)"
}

