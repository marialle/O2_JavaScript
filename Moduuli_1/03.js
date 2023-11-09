'use strict';

let list = []
let sum = 0

for (let i = 0; i < 3; i++) {
  let number = +prompt('Give me a number');
  list.push(number);
  sum = sum + number;
}

const product = list[0] * list[1] * list[2];
const average = sum / 3;

const result = `Sum: ${sum}, product: ${product}, average: ${average}.`
document.querySelector('#target').innerHTML = result;