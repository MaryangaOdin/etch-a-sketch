let canvas = document.getElementById('canvas');
let dimension = document.getElementById('dimension');
let dimensionLabel = document.getElementById('dimension-label');
let showGrid = document.getElementById('showgrid');

function generateGrid() {
    canvas.innerHTML='';
    document.documentElement.style.setProperty('--grid-dimension', dimension.value);
    for (let i=0; i < dimension.value*dimension.value; i++) {
        let square = document.createElement('div');
        canvas.appendChild(square);
    }
    dimensionLabel.innerText = `Grid dimension: ${dimension.value} x ${dimension.value}`; 
} 

function toggleGrid() {
    for (let square of canvas.childNodes) {
        if (showGrid.checked) {
            square.classList.remove('hidden');
        } else {
            square.classList.add('hidden');
        }
    }
}

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

function fillSquare(e) {
    getEventTarget(e).style.backgroundColor = 'black';
}

dimension.addEventListener('input', generateGrid);
canvas.addEventListener('mouseover', fillSquare);
document.getElementById('showgrid').addEventListener('click', toggleGrid);

generateGrid();