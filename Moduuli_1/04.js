'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const name = prompt("What's your name?");
const c = confirm('Would you like to know your House?')
if (c === true) {
  const house = getRandomInt(1, 4);
  switch (house) {
    case 1:
      alert(`${name}, you are Gryffindor`);
      break;
    case 2:
      alert(`${name}, you are Slytherin`);
      break;
    case 3:
      alert(`${name}, you are Hufflepuff`);
      break;
    case 4:
      alert(`${name}, you are Ravenclaw`);
      break;
    default:
      alert('Error with getRandomInt.');
  }
}