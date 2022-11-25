let gridSize = 30;
const gridContainer = document.querySelector("#grid-container");

let gridArray = []

function buildGrid (size) {
    for (let i=0;i<size;i++) {
        gridArray.push([]);
    }

    for (let i=0;i<size;i++) {
        let rowDiv = document.createElement("div");
        rowDiv.setAttribute("class","mini-container");
        gridContainer.appendChild(rowDiv);
        for (let j=0;j<size;j++) {
            let columnDiv = document.createElement("div");
            columnDiv.classList.add("square");
            rowDiv.appendChild(columnDiv);
            gridArray[i][j] = columnDiv;
            gridArray[i][j].addEventListener("mouseover", changeColor);
        }
    }
}
buildGrid(gridSize);


function removeGrid () {
    gridContainer.replaceChildren([]);
    gridArray = [];
}

function changeColor (e) {
    e.srcElement.style.backgroundColor = "rgb(67, 141, 170)";
}

function refresh () {
    for (i=0;i<gridSize;i++) {
        for (j=0;j<gridSize;j++) {
            gridArray[i][j].style.backgroundColor = "white";
        }
    }
}


const changeButton = document.querySelector("#change");
changeButton.addEventListener("click", () => {
    gridSize = prompt("Enter grid size");
    if (gridSize>0 && gridSize <=100) {
        removeGrid();
        buildGrid(gridSize);
    } else {
        alert("Enter a number between 1 and 100");
    }
})


const refreshButton = document.querySelector("#refresh");
refreshButton.addEventListener("click", refresh);