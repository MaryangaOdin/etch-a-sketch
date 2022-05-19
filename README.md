# What is this? 

It's a pixelart editor, written in Javascript, which I made while going through the [Web Development Curriculum](https://www.theodinproject.com/paths) on The Odin Project. Here is the [assignment](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).

A live version of this project can be found [here](https://maryangaodin.github.io/etch-a-sketch/)

# What did I learn? 

## CSS

In this project, I found a good use for [CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/), in dynamically generating a grid on which to draw, according to the pixel dimension the user has selected. 

## Javascript

I learned how to get one EventListener to listen for click or hover events on all of the dynamically generated squares in the canvas: 

```javascript
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
```

I also learned how to detect a touch screen, and make an element appear or not appar, conditional on that. Hat tip to John Au-Yeung at [JavaScript Answers](https://thewebdev.info/2021/02/27/how-to-detect-a-touch-screen-device-using-javascript/)

```javascript
const isTouchDevice = () => {  
    return (('ontouchstart' in window) ||  
      (navigator.maxTouchPoints > 0) ||  
      (navigator.msMaxTouchPoints > 0));  
  } 

if (!isTouchDevice()) {
    document.getElementById('drawmode').style.visibility = 'visible';
    document.getElementById('drawmode-label').style.visibility = 'visible';
} else {
    toggleDrawMode();
}
generateGrid();
```