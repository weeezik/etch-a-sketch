//set container item to a variable
const container = document.querySelector(".container");

//add button
const buttonDiv = document.createElement("div");
document.body.append(buttonDiv);
const button = document.createElement("button");
button.textContent = "Click here to set grid size.";
buttonDiv.append(button);

const oldContainer = document.createElement("div");
container.appendChild(oldContainer);
oldContainer.classList.add("oldContainer");

// default settings with squaresPerSide === 5

for (let i = 1; i <= 5; i++) {
    //create a row div
    const row = document.createElement("div");
    row.classList.add("row");
    oldContainer.append(row);
    for (let j = 1; j <= 5; j++) {
        //create a square div
        const square = document.createElement("div");
        square.classList.add("square");
        row.append(square);
    }
}



function createGrid() {
    const newContainer = document.createElement("div");
    container.appendChild(newContainer);
    //maybe use [i or count in the newContainer to delete newContainer[count-1] while adding newContainer[count]]
    newContainer.classList.add("newContainer");
    //remove elements with the id count-1 (i.e., the previous count)
    let squaresPerSide = Number(prompt("Enter your X value. This grid is built in a X by X format."));
    for (let i = 1; i <= squaresPerSide; i++) {
        //create a row div
        const currentRow = document.createElement("div");
        currentRow.classList.add("row");
        currentRow.setAttribute("id", squaresPerSide);
        newContainer.append(currentRow);
        for (let j = 1; j <= squaresPerSide; j++) {
            const currentSquare = document.createElement("div");
            currentSquare.classList.add("square");
            currentSquare.setAttribute("id", squaresPerSide);
            currentRow.append(currentSquare);
        }
    }
}

button.addEventListener("click", () => {
    oldContainer.remove();
    createGrid();
    //use id method to delete previously generated user grids.
});






















