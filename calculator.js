const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2
const equalsButton = document.querySelector('button[data-behavior ="equals"]')
const clearButton = document.querySelector('button[data-behavior ="clear"]')
let textView = document.querySelector('input[data-view]')
let calculation = []
let num1 = ''
let num2 = ''
let currentOperator = ''

function equals () {
  switch (currentOperator) {
    case '+':
      add(num1, num2)
      console.log(add(num1, num2))
      break
    case '-':
      subtract(num1, num2)
      console.log(subtract(num1, num2))
      break
    case 'X':
      multiply(num1, num2)
      console.log(multiply(num1, num2))
      break
    case '/':
      divide(num1, num2)
      console.log(divide(num1, num2))
      break
  }
}

// type numbers into the calculator display.
document.querySelector('div[data-behavior="btn-container"]').addEventListener('click', function (e) {
  if (e.target.dataset.input === 'number') {
    calculation.push(e.target.innerHTML)
    console.log(calculation)
  }
})
// type operators into the calculator display
document.querySelector('div[data-behavior="btn-container"]').addEventListener('click', function (e) {
  if (e.target.dataset.input === 'operator') {
    currentOperator = (e.target.innerHTML)
    let x = calculation.join('')
    num1 = Number(x)
    calculation = []
    console.log(currentOperator)
    console.log(num1)
  }
})
function calculate () {
  let x = calculation.join('')
  num2 = Number(x)
  equals()
}
equalsButton.addEventListener('click', () => {
  calculate()
})

function clear() {
  calculation = []
  num1 = ''
  num2 = ''
  currentOperator = ''
}

clearButton.addEventListener('click', () => {
  clear()
})
