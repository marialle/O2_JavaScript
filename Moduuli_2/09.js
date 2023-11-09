'use strict';

function even(array) {
  let even_numbers = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even_numbers.push(array[i])
    }
  }
  return even_numbers
}

const numbers = [2, 3, 40, 9, 8, 16, 33]
const even_numbers = even(numbers)

console.log(`${numbers} \n ${even_numbers}`)