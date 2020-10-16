'use strict';
//select html elements within variables
const number = document.querySelector('.js-number');
const hint = document.querySelector('.js-hint');
const button2 = document.querySelector('.js-button2');
const button = document.querySelector('.js-button');
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
  if (numberValue >= 1 && numberValue <= 100) {
    if (numberValue > numberToGuess) {
      hint.innerHTML = 'Demasiado alto';
    } else if (numberValue < numberToGuess) {
      hint.innerHTML = 'Demasiado bajo';
    } else if(numberValue === numberToGuess) {
      hint.innerHTML = 'Has ganado Campeona!!!';
    }
  } else if (numberValue < 1) {
    hint.innerHTML = 'El número debe ser mayor de 0';
  } else if (numberValue > 1) {
    hint.innerHTML = 'El número debe ser hasta 100';
  } else if (numberValue.length === undefined) {
    hint.innerHTML = 'No has introducido ningún valor'
  }
  counter();
}

//Define counter function
let counterAttemps = 0;
function counter(){
  counterAttemps++;
  counterValue.innerHTML = 'Número de intentos: ' + counterAttemps;
}

//Define reset function
function reset() {
  hint.innerHTML = 'Pista: Escribe el número y dale a Prueba'
  counterValue.innerHTML = 'Número de intentos: 0'
}

button.addEventListener('click', checkNumber) 
button2.addEventListener('click', reset)