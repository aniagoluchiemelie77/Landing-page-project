'use strict';
//selecting the various sections
const nav = document.querySelector('.navigation');
const sec1 = document.querySelector('.sec1');
const sec2 = document.querySelector('.sec2');
const sec3 = document.querySelector('.sec3');
const sec4 = document.querySelector('.sec4');
const sec5 = document.querySelector('.sec5');
const sec6 = document.querySelector('.sec6');
const sec7 = document.querySelector('.sec7');
const sec8 = document.querySelector('.sec8');
const divThree = document.getElementById('sec7__divthree');
let thirdDiv = document.getElementById('sec7__thirddiv'); 

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

//selection for typing effects
const sec2Header = document.querySelector('.typingEffect1');
const sec3Header = document.querySelector('.typingEffect2');
const sec6Header = document.querySelector('.typingEffect5');
const sec2Container = document.querySelector('.sec2__firstrow__div1');
const sec6Container = document.querySelector('.sec6');
const sec3Container = document.querySelector('.sec3');
const sec6txt = "What I Can Do For You";
const sec3txt = "I'm Diamaka, Your Veteran Cybersecurity Writer And Content Strategist";
const sec2txt = 'Data Backed & Result-Driven Cybersecurity Content';

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
let heightDivThree = divThree.clientHeight;
let thirdDivHeight = `${heightDivThree}px`;
let width = screen.width;
if ( width <= 850){
    pic2.remove();
    thirdDiv.style.minHeight = thirdDivHeight;
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

//typing effect
function txtTypingEffect (elem, txt, i = 0){
    if(i === 0){
        elem.textContent = "";
    }
    elem.textContent += txt[i];
    if (i == txt.length - 1){
        return;
    }
    setTimeout(() => txtTypingEffect(elem, txt, i + 1), 60)
};
if (sec6Container.scrollIntoView){
    setTimeout(() => txtTypingEffect(sec6Header, sec6txt), 2000);
};
txtTypingEffect(sec2Header, sec2txt);
setTimeout(() => txtTypingEffect(sec3Header, sec3txt), 2000);