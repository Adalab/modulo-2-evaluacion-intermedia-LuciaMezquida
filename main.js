'use strict';

const number = document.querySelector('.js-number');
const button = document.querySelector('.js-button');
const hint = document.querySelector('.js-hint');
const counter = document.querySelector('.js-counter');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const numberToGuess = getRandomNumber(100)
console.log(numberToGuess)

function checkNumber(){
  const numberValue = parseInt(number.value);
  let attempsNumber = 0;
  if (numberValue < 1 || numberValue > 100) {
    hint.innerHTML = 'El número debe estar entre 1 y 100';
    attempsNumber += 1;
    
  }else if(numberValue > numberToGuess) {
    hint.innerHTML = 'Demasiado alto';
    attempsNumber += 1;
  } else if (numberValue < numberToGuess) {
    hint.innerHTML = 'Demasiado bajo';
    attempsNumber += 1;
  } else if (numberValue === numberToGuess) {
    hint.innerHTML = 'Has ganado Campeona!!!';
    attempsNumber += 1;
  }
} 

button.addEventListener('click', checkNumber)