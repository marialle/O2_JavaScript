'use strict';

let numbers = []
let input = true

while (input === true) {
  let number = prompt('Enter a number')
  if (numbers.includes(number) === false) {
    numbers.push(number)
  } else {
    numbers.sort((a,b) => a-b).reverse()
    console.log(numbers)
    let input = false
    break;
  }
}