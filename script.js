let gridSize = 16;

const button = document.querySelector("button");

button.addEventListener("click", () => {
    gridSize = prompt("All grids are square. Choose grid length between 1 to 100.");
    if (gridSize > 100 || gridSize < 1 || (Number.isInteger(parseInt(gridSize)) == false)) {
        gridSize = prompt ("You didn't follow the instructions. Choose grid length between 1 to 100.");
    }
    while (container.firstChild) {
        container.firstChild.remove();
    }
    cloneGrid();
});

const container = document.querySelector("#container");

function cloneGrid() {
    for (let i = 1; i <= (gridSize * gridSize); i++) {
        const box = document.createElement("div");
        box.style.width = 500/gridSize + "px";
        box.style.height = 500/gridSize + "px";
        box.setAttribute("class", "box");
        container.appendChild(box);

        box.addEventListener("mouseover", () => {
        box.setAttribute("class", "box2");
        });
    }
}

cloneGrid();



