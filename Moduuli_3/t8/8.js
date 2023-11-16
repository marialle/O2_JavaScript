'use strict';

// Work in progress

const select = document.querySelector('select')
const p = document.getElementById('result')
const button = document.getElementById('start')



// Calculator
// Match case to selected operation
function Calculator(one, two, selection) {
  const num1 = +one
  const num2 = +two
  switch (selection) {

    case 'add':
      const add = num1 + num2
      const addStr = add.toString()
      p.append(addStr)
      break;

    case 'sub':
      const sub = num1 - num2
      const subStr = sub.toString()
      p.append(subStr)
      break;

    case 'multi':
      const multi = num1 * num2
      const multiStr = multi.toString()
      p.append(multiStr)
      break;

    case 'div':
      const div = num1 / num2
      const divStr = div.toString()
      p.append(divStr)
      break;

    default:
      console.log('Error')

  }
}


// Button
button.addEventListener('onclick', function(){

  // Retrieve the values
  const num_1 = document.getElementById('num1').value
  const num_2 = document.getElementById('num2').value
  console.log(num_1)
  console.log(num_2)

  const selection = select.options[select.selectedIndex].value
  Calculator(num_1, num_2, selection)

})