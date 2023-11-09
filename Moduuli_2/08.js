'use strict';

function concat(array) {
  let conc = ''
  for (let i = 0; i < array.length; i++) {
    conc += array[i]
  }
  return conc
}

const names = ['Johnny', 'DeeDee', 'Joey', 'Marky']


document.querySelector('#target').innerHTML = concat(names);