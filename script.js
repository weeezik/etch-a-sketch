//set container item to a variable
const container = document.querySelector(".container");

//add button
const buttonDiv = document.createElement("div");
document.body.append(buttonDiv);
const button = document.createElement("button");
button.textContent = "Click here to set grid size.";
buttonDiv.append(button);


//squaresPerSide is the value X in a X by X grid that we are making 
let squaresPerSide = 16;

for (let i = 1; i <= squaresPerSide; i++) {
    //create a row div
    const row = document.createElement("div");
    row.classList.add("row");
    container.append(row);
    for (let j = 1; j <= squaresPerSide; j++) {
        //create a square div
        const square = document.createElement("div");
        square.classList.add("square");
        row.append(square);
    }
}

function createGrid () {
    for (let i = 1; i <= squaresPerSide; i++) {
        //create a row div
        const row = document.createElement("div");
        row.classList.add("row");
        container.append(row);
        for (let j = 1; j <= squaresPerSide; j++) {
            //create a square div
            const square = document.createElement("div");
            square.classList.add("square");
            row.append(square);
        }
    }
}

button.addEventListener("click", () => {
    let userSquares = prompt("Enter your X value. This grid is built in a X by X format.")
    let squaresPerSide = Number(userSquares);
    if (squaresPerSide > 100) {
        prompt("ERROR. Keep number below 100");
    } else {
        return squaresPerSide;
    }
    createGrid();
});









