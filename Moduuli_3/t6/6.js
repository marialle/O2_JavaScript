'use strict';

const button = document.querySelector('button')
button.addEventListener('click', function(event){
  alert(`Element ${event.currentTarget.tagName} was clicked!`)
})