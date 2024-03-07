//set container item to a variable
const container = document.querySelector(".container");

//add button
const buttonDiv = document.createElement("div");
document.body.append(buttonDiv);
const button = document.createElement("button");
button.textContent = "Click here to set grid size.";
buttonDiv.append(button);

button.addEventListener("click", () => {
    let squaresPerSide = Number(prompt("Enter your X value. This grid is built in a X by X format."));
    for (let i = 1; i <= squaresPerSide; i++) {
        //delete
        
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
});

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



















