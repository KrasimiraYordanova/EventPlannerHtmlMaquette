'use strict';

const burgerMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
})