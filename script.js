const resetButton = document.getElementById("reset-board");
const changeButton = document.getElementById("change-resolution");
const sketchBoard = document.getElementById("sketch-board");
console.log(resetButton);
console.log(sketchBoard);

resetButton.addEventListener('click', resetBoard)
changeButton.addEventListener('click', changeResolution)

let gridResolution = 16;
resetBoard();

function resetBoard() {
    removeGrid();
    newGrid(gridResolution);
    console.log("Board reset completed");
};

function changeResolution() {
    let newGridResolution = Math.floor(prompt("Enter a number between 10 and 100"));
    if (newGridResolution < 10 || newGridResolution > 100) {
        alert("This number is invalid. Please try again with a number between 10 and 100.");
        console.log("Resolution unchanged: "+gridResolution);
    } else {
        gridResolution = newGridResolution;
        console.log("New resolution accepted: "+gridResolution);
        resetBoard();
    };
};

function removeGrid() {
    while (sketchBoard.firstChild != null) {
        sketchBoard.removeChild(sketchBoard.firstChild);
    }
    console.log("Grid cleared");
};

function newGrid(resolution) {
    for (let i = 0; i<resolution; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('grid-row');
        for (let j = 0; j<resolution; j++) {
            const newCell = document.createElement('div');
            newCell.classList.add('grid-cell');
            newCell.addEventListener('mouseenter',hoverAction);
            newRow.appendChild(newCell);
        };    
        sketchBoard.appendChild(newRow);
    };
    console.log("New grid generated"); 
};

function hoverAction(e) {
    let currentOpacity = window.getComputedStyle(e.target).opacity*1;
    let newOpacity = currentOpacity + 0.1;
    if (newOpacity <= 1) {
        e.target.style.opacity = newOpacity;
    }
};