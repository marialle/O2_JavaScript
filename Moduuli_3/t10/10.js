'use strict';

const source = document.querySelector('#source')
const target = document.querySelector('#target')


source.addEventListener('submit',
    function(event) {

  // Prevents submit so values can be retrieved
  event.preventDefault();

  // Retrieve form values
  const firstname = document.querySelectorAll('input')[0].value;
  const lastname = document.querySelectorAll('input')[1].value;
  target.append(`Your name is ${firstname} ${lastname}`)

      // Unresolved: allowing submit
      // After new submit, new p appends after old p
})