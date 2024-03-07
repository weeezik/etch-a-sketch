//set container item to a variable
const container = document.querySelector(".container");

//add button
const buttonDiv = document.createElement("div");
document.body.append(buttonDiv);
const button = document.createElement("button");
button.textContent = "Click here to set grid size.";
buttonDiv.append(button);

//default settings with squaresPerSide === 5
// let squaresPerSide = 5;
// for (let i = 1; i <= 5; i++) {
//     //create a row div
//     const row = document.createElement("div");
//     row.classList.add("row");
//     container.append(row);
//     for (let j = 1; j <= 5; j++) {
//         //create a square div
//         const square = document.createElement("div");
//         square.classList.add("square");
//         row.append(square);
//     }
// }

function createGrid () {
    //remove elements with the id count-1 (i.e., the previous count)
    let squaresPerSide = Number(prompt("Enter your X value. This grid is built in a X by X format."));
    for (let i = 1; i <= squaresPerSide; i++) {        
        //create a row div
        const currentRow = document.createElement("div");
        currentRow.classList.add("row");
        currentRow.setAttribute("id", id);
        container.append(currentRow);
        for (let j = 1; j <= squaresPerSide; j++) {
            const currentSquare = document.createElement("div");
            currentSquare.classList.add("square");
            currentSquare.setAttribute("id", id);
            currentRow.append(currentSquare);
        }
        
    }
}


let id = 1;
button.addEventListener("click", (id) => {    
    createGrid(id);
    id++;
});

// document.removeChild(container.firstElementChild)



















