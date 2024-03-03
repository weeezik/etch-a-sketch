//container flex box and flex-wrap set to wrap
const container = document.querySelector(".container");
container.setAttribute("style", "display: flex; flex-wrap: wrap");


let squaresPerSide = 2;
let totalSquares = squaresPerSide*squaresPerSide;

function createDiv () {
    let newDiv = document.createElement("div");
    container.appendChild(newDiv);  
    newDiv.setAttribute("style", "background-color: red; width: 200px; height: 200px");
}


createDiv();

// for (let i = 1; i = totalSquares; i++) {
    
// }
