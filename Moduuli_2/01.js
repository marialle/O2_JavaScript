'use strict';

let numbers = []

for (let i = 0; i < 5; i++) {
  let numb = +prompt('Enter a number')
  numbers.push(numb)
}

let n = numbers.length
while (n >= 0) {
  console.log(numbers[n-1])
  n--
}