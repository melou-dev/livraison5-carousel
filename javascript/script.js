`use strict`;

const button = document.querySelector(`button`);
let li = document.querySelectorAll(`li`);
let i = 0;

function GetNextImage() {
    i++;

    if ( i == li.length ) {
        i = 0;
    }

        for (let i = 0; i < li.length; i++) {
            li[i].classList.remove(`active`);
        }
        li[i].classList.add(`active`); 
    }


button.addEventListener( `click`, GetNextImage);
