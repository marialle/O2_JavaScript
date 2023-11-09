'use strict';

const user_confirm = confirm('Should I calculate the square root?')

if (user_confirm === false) {
  document.querySelector('#target').innerHTML = 'The square root is not calculated.';
} else {
  const number = +prompt('Enter a number')
  if (number > 0) {
  const square_root = Math.sqrt(number)
    document.querySelector('#target').innerHTML = `${square_root}`;
  } else {
    document.querySelector('#target').innerHTML = 'The square root of a negative number is not defined.'
  }
}
{
}