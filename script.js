const container = document.querySelector(".container");

let squaresPerSide = 2;
let totalSquares = squaresPerSide
*squaresPerSide;

function createDiv () {
    let newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add("box");
}

let i = 0;
do {
    createDiv();
    i++;
} while (i < totalSquares);

