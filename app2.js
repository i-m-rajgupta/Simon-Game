
let redDiv = document.querySelector("#red");
let greenDiv = document.querySelector("#green");
let yellowDiv = document.querySelector("#yellow");
let blueDiv = document.querySelector("#blue");

let level = document.querySelector(".level");
let levelNum = 0;
let levelNumSpan = document.querySelector("#levelNum");
levelNumSpan.textContent = levelNum;
let arrMemory = [];
function generateNum(){
   let num1 = Math.floor(Math.random()*4);
   return num1;
}
let color;
function blink(){
    let num1 = generateNum();
    switch(num1) {
        case 0 :
        color = "red";
        break;
        case 1 :
        color = "green";
        break;
        case 2 :
        color = "yellow";
        break;
        case 3 :
        color = "blue";
        break;
        default : 
        color = "red";
       }
    let div = document.getElementById(color);
    div.classList.add("blink");
}
blink();
let arrOnclick =[];
let count = 0;
let divList = document.querySelectorAll(".container div");
for(let div of divList ){
div.addEventListener("click",function(event){
    if(levelNum == "0"){
    if(event.target.id == color){
        let div = document.getElementById(color);
        div.classList.remove("blink");
        arrMemory.push(color);
        levelNum++;
        levelNumSpan.textContent = levelNum ;
    } 
    }else if(arrOnclick.length < arrMemory.length){
        console.log("2")
        if(event.target.id == arrMemory[count]){
            let div = document.getElementById(color);
            div.classList.remove("blink");
            count++;
            arrOnclick.push(event.target.id);
            if(arrOnclick.length == arrMemory.length){
            blink();
            }
        } else {
            alert("You lose");
            window.location.href = "index2.html";
           return;
        }
    }else {
        let div = document.getElementById(color);
        div.classList.remove("blink");
        arrOnclick =[];
        count = 0;
        arrMemory.push(color); 
        levelNum++;
        levelNumSpan.textContent = levelNum ;
    }
    console.log("Onclick",arrOnclick);
    console.log("Memory",arrMemory);
})};
