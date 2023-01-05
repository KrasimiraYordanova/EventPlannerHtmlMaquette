"use strict";

// main navigation variables
let ulElements;
let lists;

// slider section variables
let rightButton;
let leftButton;
let dotsArray;
let dots;
let h2;

let barTitles;
let titleName;
let slider;
let img;

let counter = 0;
let images = [
    { src: "images/ethics.jpg", title: "Title One", description: "Lorem ipsum dolores isinus some random text goes here completely not knowing what it means" },
    { src: "images/fly.jpg", title: "Title Two", description: "Lorem ipsum dolores isinus some random text goes here completely not knowing what it means" },
    { src: "images/ethics.jpg", title: "Title Three", description: "Lorem ipsum dolores isinus some random text goes here completely not knowing what it means" },
    { src: "images/values.jpg", title: "Title Four", description: "Lorem ipsum dolores isinus some random text goes here completely not knowing what it means" }
];

// BURGER MENU
let menuBtn;


window.addEventListener("DOMContentLoaded", () => {
    // NAVIGATION VARIABLES
    ulElements = document.querySelector('.nav__links');
    lists = [...document.querySelector('.nav__links').children];

    ulElements.addEventListener('mouseover', btnActive);
    ulElements.addEventListener('mouseout', btnInactive);

    // SLIDER SECTION VARIABLES
    rightButton = document.querySelector(".btn--2");
    leftButton = document.querySelector(".btn--1");
    dotsArray = [...document.getElementById("dots").children];

    barTitles = document.getElementById("bar");
    h2 = document.querySelector(".titleName");
    slider = document.getElementById("slider");
    img = document.querySelector(".img-slide");

    dotsArray.forEach((circle) => circle.addEventListener("click", clickButton));

    rightButton.addEventListener("click", forwardSlide);
    leftButton.addEventListener("click", backwardSlide);

    // BURGER MENU
    menuBtn = document.querySelector('.hamburger');

    menuBtn.addEventListener('click', function() {
      menuBtn.classList.toggle('is-active');
    });
})



function btnActive(e) {
    let id = e.target.dataset.anchor;
    if (e.target.tagName === 'A' && e.target.id === id) {
        for (let i = 0; i < lists.length; i++) {
            lists[i].classList.add('inactives');
        }
        lists[id].classList.remove('inactives');
    }
}

function btnInactive(e) {
    let id = e.target.dataset.anchor;
    if (e.target.tagName === 'A' && e.target.id === id) {
        for (let i = 0; i < lists.length; i++) {
            lists[i].classList.remove('inactives');
        }
    }
}


// SLIDER FUNCTION

function clickButton() {
    counter = this.dataset.dot;
    console.log('clicking' + counter);

    changeButton();

    img.src = images[counter].src;
    h2.textContent = images[counter].title;
}

function forwardSlide() {
    if (counter < images.length - 1) {
      counter++;
    } else {
      counter = 0;
    }
    console.log(counter);
    img.src = images[counter].src;
    h2.textContent = images[counter].title;
    changeButton();
  }
  
  function backwardSlide() {
    
    if (counter > 0) {
      counter--;
    } else {
      counter = images.length - 1;
    }
    console.log(counter);
    img.src = images[counter].src;
    h2.textContent = images[counter].title;
    changeButton();
  }
  

function changeButton() {
    dots = document.querySelectorAll(".dot");

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("fancyDot");
    }
    dots[counter].classList.add("fancyDot");
}

