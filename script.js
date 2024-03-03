//container flex box and flex-wrap set to wrap
let container = document.querySelector(".container");


let squaresPerSide = 16;
let totalSquares = squaresPerSide*squaresPerSide;

function createDiv () {
    let newDiv = document.createElement("div");
    container.appendChild("div");
    newDiv.setAttribute("style", "border-color: black");
}

for (i=0; i=totalSquares; i++) {
    createDiv();
};
