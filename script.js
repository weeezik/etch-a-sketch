const container = document.querySelector(".container");

let squaresPerSide = 2;
let totalSquares = squaresPerSide*squaresPerSide;




function createDiv () {
    let newDiv = document.createElement("div");
    newRow.appendChild(newDiv);
    newDiv.classList.add("box");
}

function createRow () {
    
    let newRow = document.createElement("div");
    container.appendChild(newRow);
    newRow.classList.add("row");
    
}


// let i = 0;
// do {
//     createRow();
//     createDiv();
//     i++;
// } while (i < totalSquares);

// for (let i = 0; i = squaresPerSide; i++) {
//     createDiv();
// }


