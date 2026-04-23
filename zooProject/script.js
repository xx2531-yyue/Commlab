let monkeyEnclosure = document.querySelector("#monkeyEnclosure")

function newMonkey(){
    newAnimal("monkey",monkeyEnclosure);
}
function newAnimal(){
    console.log("making new monkey")

    let div = document.createElement("div");
    
    div.className = name;

    let randomY = Math.random()*200-100;
    let randomX = Math.random()*200-100;

    div.style.top = randomY + "px";
    div.style.left = randomX + "px";

    div.append(p);
    monkeyEnclosure.append(div);
}