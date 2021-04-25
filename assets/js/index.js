'use strict';

//для первой button событие нажатия

const [firstButton] = document.getElementsByTagName('button');

function alertOnClick(){
  alert('Success!');
}

firstButton.addEventListener('click', alertOnClick);

// если несколько кнопок с один.классом
const buttons = [...document.getElementsByClassName('main-button')];

buttons.forEach((elem) => {
elem.addEventListener('click', alertOnClick);
});

const buttons = document.getElementsByClassName('main-button');

for(elem of buttons){
  elem.addEventListener('click', alertOnClick);
}


 //Выбирает все элементы по тегу
document.getElementsByTagName 
 
//Выбирает все элементы по названию класса
document.getElementsByClassName 

const [mainSection] = document.getElementsByClassName('main-section');
//или селектор
const mainSection = document.querySelector(".main-section");

console.log(mainSection);
 
//Выбирает элемент по его id
document.getElementById 

const par = document.getElementById('unique');
//или
const par = document.querySelector("#unique");
console.log(par); 

 //Выбирает все элементы, которые соответствуют css селектору
document.querySelectorAll('#list > li > span') 

const heading = document.querySelector(".main-section > h1");
console.log(heading)
 
//Выбирает первый найденный элемент, который соответствует css селектору
document.querySelector






