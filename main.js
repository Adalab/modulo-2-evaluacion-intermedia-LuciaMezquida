'use strict';
//select html elements within variables
const number = document.querySelector('.js-number');
const button = document.querySelector('.js-button');
const hint = document.querySelector('.js-hint');
const counterValue = document.querySelector('.js-counter');

//generate random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const numberToGuess = getRandomNumber(100)
console.log('Mi número aleatorio es: ' + numberToGuess)

//check random number with input number
function checkNumber(){
  const numberValue = parseInt(number.value);
  console.log('El número introducido es: ' + numberValue)
  if (numberValue < 1 || numberValue > 100) {
    hint.innerHTML = 'El número debe estar entre 1 y 100';
  }else if(numberValue > numberToGuess) {
    hint.innerHTML = 'Demasiado alto';
  } else if (numberValue < numberToGuess) {
    hint.innerHTML = 'Demasiado bajo';
  } else if (numberValue === numberToGuess) {
    hint.innerHTML = 'Has ganado Campeona!!!';
  }
  counter();
}

let counterAttemps = 0;
function counter(){
  counterAttemps++;
  counterValue.innerHTML = 'Número de intentos: ' + counterAttemps;
}

button.addEventListener('click', checkNumber)