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
const header = document.querySelector('.navigation');
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
let range = document.createRange();

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
const sec6txt = "What I Can Do for You";
const sec3txt = "I'm Diamaka, Your Tech Content Writer and Content Strategist With 4 Years of Hands-on Experience";
const sec2txt = 'Data-Backed & Result-Driven Tech Content';

//fade in and slide in functions
const fadeInAndSlideInFunc = function () {
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
};
fadeInAndSlideInFunc();
//lazy loading
const lazyLoading = function () {
    const loadImg = function(entries, observer) {
        const [entry] = entries;
        if (!entry.isIntersecting) return
        entry.target.src = entry.target.dataset.src;
        entry.target.addEventListener('load', function () {
            entry.target.classList.remove('lazy-img');
        })
        observer.unobserve(entry.target);
    }
    const imgObserver = new IntersectionObserver(loadImg, {
        root: null,
        threshold: 0,
        rootMargin: '200px',
    })
    const imgTarget = document.querySelectorAll('img[data-src]')
    imgTarget.forEach(img => imgObserver.observe(img));
};
lazyLoading();

const stickyNavFunc = function () {
    const navHeight = header.getBoundingClientRect().height;
    const stickyNav = function (entries) {
        const [entry] = entries;
        if (!entry.isIntersecting) {
            header.classList.add('sticky');
        }else{
            header.classList.remove('sticky');
        }
    }
    const headerObs = new IntersectionObserver(stickyNav, {
        root: null,
        threshold: 0,
        rootMargin: `-${navHeight}px`,
    });
    headerObs.observe(sec1);
    
};
stickyNavFunc();