//set container item to a variable
const container = document.querySelector(".container");

//add button
const buttonDiv = document.createElement("div");
document.body.append(buttonDiv);
const button = document.createElement("button");
button.textContent = "Click here to set grid size.";
buttonDiv.append(button);


//squaresPerSide is the value X in a X by X grid that we are making 

let squaresPerSide = 5;
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

button.addEventListener("click", () => {
    let squaresPerSide = Number(prompt("Enter your X value. This grid is built in a X by X format."));
    //if number of clicks is less than 1 do not run remove, else do run remove (i.e., run remove when iterations is > 1)
    for (let i = 1; i <= squaresPerSide; i++) {
        // row.remove();

        //create a row div
        const row = document.createElement("div");
        row.classList.add("row");
        container.append(row);
        for (let j = 1; j <= squaresPerSide; j++) {
            // square.remove();

            //create a square div
            const square = document.createElement("div");
            square.classList.add("square");
            row.append(square);
        }
    }
});













