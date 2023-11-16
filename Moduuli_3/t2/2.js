'use strict';

const target = document.querySelector('#target')

const place = ['First', 'Second', 'Third']

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li')
    li.append(`${place[i]} item`)
  target.appendChild(li)
}

const my_item = document.querySelectorAll('li')[1]
my_item.classList.add('my-item')