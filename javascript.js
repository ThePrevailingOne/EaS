let canvas = document.querySelector("#canvas");
let defaultSize = 16;
let size = defaultSize;
let sizeinput = document.querySelector("#sizeInput");

sizeinput.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        resizeCanvas();
    }
});

function setCanvas (size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.style.flexGrow = 1;
        row.style.display = "flex";
        for (let j = 0; j < size; j++) {
            let column = document.createElement("div");
            column.style.flexGrow = 1;
            column.onmouseover = () => {
                column.style.backgroundColor = "black";
            }
            row.appendChild(column);
        };
        canvas.appendChild(row);
    }
}

function resetTile () {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
        console.log("aye");
    };
    setCanvas(size);
    console.log("I'm just here to check lmao");
}

function resizeCanvas() {
    console.log("resizing bro");
    console.log(sizeinput.value);
    if (sizeinput.value && sizeinput.value > 0) {
        size = sizeinput.value
    };
    resetTile();
}

setCanvas(defaultSize);