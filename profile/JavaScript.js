"use strict";

const ul = document.querySelector('#carousel-ul');
const slides = ul.children;
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

prev.addEventListener('click', () => {
    currentIndex--;
    currentIndex = currentIndex % slides.length;
    moveSlide();
});
function nextImg(){
    currentIndex++;
    currentIndex = currentIndex % slides.length;
    moveSlide();
}
next.addEventListener('click',nextImg);
function moveSlide() {
    if ( currentIndex < 0 ) {
        currentIndex = slides.length - 1;
    }
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
}
setInterval(nextImg, 3000)