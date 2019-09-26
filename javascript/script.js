`use strict`;

const button = document.querySelector(`button`);
const ul = document.querySelector(`ul`);
let li = document.querySelectorAll(`li`);
let i = 0;

function GetNextImage() {
        for (let i = 0; i < li.length; i++) {
            li[i].classList.remove(`active`);
        }
    }
    // li[i++].classList.add(`active`); 

function ReturnToFistImage() {

}

function GetNextImageByClick() {
    GetNextImage();
}

button.addEventListener( `click`, GetNextImageByClick);
