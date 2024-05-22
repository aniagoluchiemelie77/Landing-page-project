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
const pic1 = document.querySelector('.sec4__img');
const pic2 = document.querySelector('.sec4__div3__pic2');
const pic3 = document.querySelector('.sec4__div3__pic3');
const pic4 = document.querySelector('.sec4__div3__pic4');
let imgbox = document.getElementById('imagebox');
let img = document.getElementById('img');
const imagesArray = ["img/landingpg3.png", "img/landingpg4 (1).png", "img/landingpg5.png", "img/landingpg2.png"];

//selection for fade in funcion and slide in function
const fadeIn = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

//fade in and slide in functions
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -60px 0px",
};
const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);
fadeIn.forEach((fader) => {
    appearOnScroll.observe(fader);
})
sliders.forEach((slider) => {
    appearOnScroll.observe(slider);
})

//function for changing screen image
let width = screen.width;
if ( width <= 700){
    pic2.remove();
    pic3.remove();
    pic4.remove();
    imgbox.classList.remove('sec4__div3');
    let numImages = imagesArray.length;
let i = 0; 

setInterval(function() {
  let src = imagesArray[i];
  img.src = src;
  i++;
  if (i == numImages) {
    i = 0;
  }

}, 4000); // Change every 2 seconds
};
