const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2
const equalsButton = document.querySelector('button[data-behavior ="equals"]')
const clearButton = document.querySelector('button[data-behavior ="clear"]')
let textView = document.querySelector('div[data-behavior ="view"]')
let calculation = []
let num1 = ''
let num2 = ''
let currentOperator = ''

function equals () {
  switch (currentOperator) {
    case '+':
      add(num1, num2)
      textView.innerHTML = (add(num1, num2))
      break
    case '-':
      subtract(num1, num2)
      textView.innerHTML = (subtract(num1, num2))
      break
    case 'x':
      multiply(num1, num2)
      textView.innerHTML = (multiply(num1, num2))
      break
    case '/':
      divide(num1, num2)
      textView.innerHTML = (divide(num1, num2))
      break
  }
}

// type numbers into the calculator display.
document.querySelector('div[data-behavior="btn-container"]').addEventListener('click', function (e) {
  if (e.target.dataset.input === 'number') {
    calculation.push(e.target.innerHTML)
    textView.innerHTML = calculation.join('')
    console.log(calculation)
  }
})
// type operators into the calculator display
document.querySelector('div[data-behavior="btn-container"]').addEventListener('click', function (e) {
  if (e.target.dataset.input === 'operator') {
    currentOperator = (e.target.innerHTML)
    textView.innerHTML = currentOperator
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
function clear () {
  calculation = []
  num1 = ''
  num2 = ''
  currentOperator = ''
  textView.innerHTML = ''
}

clearButton.addEventListener('click', () => {
  clear()
})
