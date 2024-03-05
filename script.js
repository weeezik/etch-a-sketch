//set container item to a variable
const container = document.querySelector(".container");

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




//hover event listener, for elements with class="square"
//within event listener there is a function that changes the color of the div to plum (hover color = plum)









