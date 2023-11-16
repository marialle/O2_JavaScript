'use strict';

const my_list = document.querySelector('#target')
const place = ['First', 'Second', 'Third']

for (let i = 0; i < 3; i++) {
  my_list.innerHTML += `<li>${place[i]} item</li>`
}