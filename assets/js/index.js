'use strict';

const heading = document.querySelector('.art > h1');
const img = document.querySelector('.art > img');
const span = document.querySelector('.art > p > span');


//или 

const art = document.querySelector('.art');

const heading = art.querySelector('h1');
const img = art.querySelector('img');
const span = art.querySelector('p > span');

console.log(heading, img, span);