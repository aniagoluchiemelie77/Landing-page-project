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

//selecting images 
const pic1 = document.querySelector('.sec4__div3__pic1');
const pic2 = document.querySelector('.sec4__div3__pic2');
const pic3 = document.querySelector('.sec4__div3__pic3');
const pic4 = document.querySelector('.sec4__div3__pic4');

const imgBox = document.getElementById('imagebox');
const imgs = document.querySelectorAll('.sec4img');
const images = [pic1, pic2, pic3, pic4];

const heightImgBox = imgBox.offsetTop;
const widthImgBox = imgBox.offsetWidth;
console.log(widthImgBox);
const displayImg = setTimeout(function(array){
    array.forEach(function() {
        for( let i = 0; i < array.length; i++){
           return array[i]
        }
    } )
}, 3000);
const newChild = displayImg(images);
const changeImg = function(){
    if (window.innerHeight === heightImgBox && window.innerWidth === widthImgBox && window.innerWidth <= 640){
        imgBox.replaceChild(imgs, newChild);  
    }
}
changeImg();