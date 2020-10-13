'use strict';

const gameBoard = document.querySelector('.js-game');
const number = document.querySelector('.js-number');
const button = document.querySelector('.js-button');
const hint = document.querySelector('.js-hint');
const counter = document.querySelector('.js-counter');



function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const numberToGuess = getRandomNumber(100)
let attempsNumber = 0;
console.log('Mi número aleatorio es: ' + numberToGuess)

function checkNumber(){
  const numberValue = parseInt(number.value);
  console.log('El número introducido es: ' + numberValue)
  if (numberValue < 1 || numberValue > 100) {
    hint.value = 'El número debe estar entre 1 y 100';
    attempsNumber += 1;
    counter.value = 'Número de intentos: ' + attempsNumber;
  }else if(numberValue > numberToGuess) {
    hint.value = 'Demasiado alto';
    attempsNumber += 1;
    counter.value = 'Número de intentos: ' + attempsNumber;
  } else if (numberValue < numberToGuess) {
    hint.value = 'Demasiado bajo';
    attempsNumber += 1;
    counter.value = 'Número de intentos: ' + attempsNumber;
  } else if (numberValue === numberToGuess) {
    hint.value = 'Has ganado Campeona!!!';
    attempsNumber += 1;
    counter.value = 'Número de intentos: ' + attempsNumber;
  }
} 

button.addEventListener('click', checkNumber)