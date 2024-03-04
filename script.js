//container flex box and flex-wrap set to wrap
const container = document.querySelector(".container");




let squaresPerSide = 2;
let totalSquares = squaresPerSide*squaresPerSide;

function createDiv () {
    let newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add("box");
}

createDiv();

// for (let i = 1; i = totalSquares; i++) {
    
// }
