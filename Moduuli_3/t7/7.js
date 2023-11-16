'use strict';

const trigger = document.querySelector('#trigger')
const target = document.querySelector('#target')

function img_change() {
  target.src="picB.jpg"
  target.alt="example"
}

function img_back() {
  target.src="picA.jpg"
  target.alt="example"
}

trigger.addEventListener('mouseenter', img_change)
trigger.addEventListener('mouseleave', img_back)