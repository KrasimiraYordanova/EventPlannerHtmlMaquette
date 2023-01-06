'use strict';

let openBtn = document.querySelector("h1");
let overlay = document.querySelector(".overlay");
let closeBtn = document.querySelector(".fa-solid");

openBtn.addEventListener("click", create);
closeBtn.addEventListener("click", closeModal);

function create() {
  overlay.classList.remove('hidden');
}
function closeModal() {
  overlay.classList.add('hidden');
}




// const burgerMenu = document.querySelector('.hamburger');
// const mobileMenu = document.querySelector('.mobile-nav');

// burgerMenu.addEventListener('click', function() {
//     burgerMenu.classList.toggle('is-active');
//     mobileMenu.classList.toggle('hidden');
// })

// let button = document.querySelector("h1");
// let modalDiv = document.querySelector(".overlay");
// let p = document.querySelector(".close");


