let sideLength = 25;
let pixelLength = 1;
let numBoxes = 16;
const width = 400;

const button = document.querySelector("#button");


function makeBox(newWidth){
    let div = document.createElement('div');
    div.style.width = newWidth + "px";
    div.style.height = newWidth + "px";
    div.style.border = pixelLength + "px solid black"
    return div;
}

let container = document.querySelector(".container");

function generateBoxes(numBoxes, newWidth){
for (let x = 0; x < numBoxes; x++){
for (let i = 0; i < numBoxes; i++){
    let tempDiv = makeBox(newWidth);
    container.appendChild(tempDiv)
}
}
}

let mouseDown = false;

container.addEventListener('mousedown', (e) => {
    mouseDown = true
    let targetDiv = e.target;
    targetDiv.style.backgroundColor = "red";
});
container.addEventListener('mouseup', () => mouseDown = false);

container.addEventListener('mouseover', e => {
    if (mouseDown){
    let targetDiv = e.target;
    targetDiv.style.backgroundColor = "red";
    }
});


button.addEventListener('click', () => {
    let value = Number(prompt("How many boxes would you like?"));
    if (value > 100){
        return;
    }
    container.innerHTML = "";
    let newWidth = width/value;
    generateBoxes(value, newWidth);
    container.style.width = "400px";
    
})

function initialize(){
    generateBoxes(16, 400/16);
    container.style.width = "400px";
}

initialize();