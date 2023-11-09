'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let list = []
let times = +prompt('How many dice?');
for (times > 0; times--;) {
  let roll = getRandomInt(1, 6);
  list.push(roll)
}

let sum = 0
let i = 0
while (i < list.length) {
  sum = sum + (list[i]);
  i++;
}

// harjoittelin lista elementtejen tekemistä tuossa noppa tehtävässä, enkä karkausvuosien

let html = '';

let n = 0
while (n < list.length) {
  html += `<li>${list[n]}</li>`
  n++
}

document.querySelector('#target').innerHTML = html;