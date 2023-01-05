'use strict';

let uls = [...document.querySelectorAll('.ul')];
let buttonList = [...document.querySelectorAll('.anchor-btn')];
buttonList.forEach(elem => elem.addEventListener('click', show))

function show() {

    console.log(this);
    for (let i = 0; i < buttonList.length; i++) {
        if (buttonList[i] != this) {
            uls[i].classList.add('hide-dropdown');
            console.log(uls[i]);
        } else {
            // uls[i].classList.remove('dropdown-menu');
            uls[i].classList.add('dropdown-menu');
        }
    }





}