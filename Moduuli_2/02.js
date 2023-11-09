'use strict';

let participants = []
let times = +prompt('How many participants?')
for (times > 0; times--;) {
  let participant = prompt('Enter name of participant');
  participants.push(participant)
}
participants.sort()


let html = ''
let n = 0
while (n < participants.length) {
  html += `<li>${participants[n]}</li>`
  n++
}

document.querySelector('#target').innerHTML = html;