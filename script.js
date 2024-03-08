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

for (let i = 1; i <= 5; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    oldContainer.append(row);
    for (let j = 1; j <= 5; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        row.append(square);
    }
}

function createGrid() {
    const newContainer = document.createElement("div");
    container.appendChild(newContainer);
    newContainer.classList.add("newContainer");
    let squaresPerSide = Number(prompt("This grid is built in a X by X format. Enter your X value (max. 100): "));
    for (let i = 1; i <= squaresPerSide; i++) {
        const currentRow = document.createElement("div");
        currentRow.classList.add("row");
        newContainer.append(currentRow);
        for (let j = 1; j <= squaresPerSide; j++) {
            const currentSquare = document.createElement("div");
            currentSquare.classList.add("square");
            currentRow.append(currentSquare);
        }
    }
}

button.addEventListener("click", () => {
    container.childNodes[0].remove();
    createGrid();
});


























