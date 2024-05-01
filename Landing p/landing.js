'use strict';

//selecting the various sections
const sec1 = document.querySelector('.sec1');
const sec2 = document.querySelector('.sec2');
const sec3 = document.querySelector('.sec3');
const sec4 = document.querySelector('.sec4');
const sec5 = document.querySelector('.sec5');
const sec6 = document.querySelector('.sec6');
const sec7 = document.querySelector('.sec7');
const sec8 = document.querySelector('.sec8');
const pic1 = document.getElementById('pic1'); 
const pic2 = document.getElementById('pic2'); 
const pic3 = document.getElementById('pic3'); 
const pic4 = document.getElementById('pic4'); 
  

  
function animate (element) { 
    let elementWidth = element.offsetWidth; 
    let parentWidth = element.parentElement.offsetWidth; 
    let flag = 0; 
  
    setInterval(() => { 
        element.style.marginLeft = --flag + "px"; 
  
        if (elementWidth == -flag) { 
            flag = parentWidth; 
        } 
    }, 10); 
} 
animate(pic1); 
animate(pic2); 
animate(pic3); 
animate(pic4);