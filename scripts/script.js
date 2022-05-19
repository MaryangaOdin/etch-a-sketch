function generateGrid() {
    let canvas = document.getElementById('canvas');
    let dimension = document.getElementById('dimension').value;
    canvas.innerHTML='';
    document.documentElement.style.setProperty('--grid-dimension', dimension);
    for (let i=0; i < dimension*dimension; i++) {
        canvas.appendChild(document.createElement('div'))
    }
    document.getElementById('dimension-label').innerText = `Grid dimension: ${dimension} x ${dimension}`; 
} 

function toggleGrid() {
    for (let square of document.getElementById('canvas').childNodes) {
        if (document.getElementById('showgrid').checked) {
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
    if (document.getElementById('random').checked) {
        getEventTarget(e).style.backgroundColor = `rgb(
            ${Math.floor(Math.random() * 256)}, 
            ${Math.floor(Math.random() * 256)}, 
            ${Math.floor(Math.random() * 256)})`;
    } else {
        getEventTarget(e).style.backgroundColor = document.getElementById('color').value;
    }
    if (document.getElementById('darken').checked) {
        if(getEventTarget(e).style.opacity == '1' || getEventTarget(e).style.opacity =='') {
            getEventTarget(e).style.opacity = '0.1'; 
        } else {
            getEventTarget(e).style.opacity = (parseFloat(getEventTarget(e).style.opacity)+0.1).toFixed(2);
        } 
    }
}

function toggleDrawMode() {
    if (this.value == 'hover') {
        document.getElementById('canvas').addEventListener('mouseover', fillSquare);
        document.getElementById('canvas').removeEventListener('click', fillSquare);
    } else if (this.value=='click') {
        document.getElementById('canvas').addEventListener('click', fillSquare);
        document.getElementById('canvas').removeEventListener('mouseover', fillSquare);
    }
}

const isTouchDevice = () => {  
    return (('ontouchstart' in window) ||  
      (navigator.maxTouchPoints > 0) ||  
      (navigator.msMaxTouchPoints > 0));  
  } 

dimension.addEventListener('input', generateGrid);
document.getElementById('canvas').addEventListener('mouseover', fillSquare);
document.getElementById('showgrid').addEventListener('click', toggleGrid);
document.getElementById('drawmode').addEventListener('change', toggleDrawMode);

if (!isTouchDevice) {
    document.getElementById('drawmode').style.visibility = 'visible';
    document.getElementById('drawmode').style.visibility = 'visible';
} else {
    toggleDrawMode();
}
generateGrid();