'use strict';

const dogs = []

for (let i = 0; i < 6; i++) {
  let dog = prompt('Dog name: ')
  dogs.push(dog)
}
dogs.sort().reverse()

let html = ''

let n = 0
while (n < dogs.length) {
  html += `<li>${dogs[n]}</li>`
  n++
}

document.querySelector('#target').innerHTML = html;