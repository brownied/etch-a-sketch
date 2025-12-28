let sideLength = 25;
let pixelLength = 0;
let numBoxes = 16;
const width = 400;

const button = document.querySelector("#button");


function makeBox(newWidth){
    let div = document.createElement('div');
    div.style.width = newWidth + "px";
    div.style.height = newWidth + "px";
    div.style.border = pixelLength + "px solid black"
    div.style.backgroundColor = "white";
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
    rand1 = Math.floor(Math.random() * 256);
    rand2 = Math.floor(Math.random() * 256); 
    rand3 = Math.floor(Math.random() * 256);
    if (targetDiv.style.backgroundColor == 'white'){  
    targetDiv.style.backgroundColor = "rgb(" + rand1 + ", " + rand2 + ", " + rand3 + ")";
    }
});
container.addEventListener('mouseup', () => mouseDown = false);

container.addEventListener('mouseover', e => {
    if (mouseDown){
    let targetDiv = e.target;
    rand1 = Math.floor(Math.random() * 256);
    rand2 = Math.floor(Math.random() * 256); 
    rand3 = Math.floor(Math.random() * 256);  

    
   if (targetDiv.style.backgroundColor == 'white'){  
    targetDiv.style.backgroundColor = "rgb(" + rand1 + ", " + rand2 + ", " + rand3 + ")";
    }
}});


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