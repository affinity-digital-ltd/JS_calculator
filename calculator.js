
const equalsButton = document.querySelector('button[data-behavior="equals"]')
const clearButton = document.querySelector('button[data-behavior="clear"]')
const textView = document.querySelector('div[data-behavior="view"]')

equalsButton.addEventListener('click', () => {
  conclude()
})

clearButton.addEventListener('click', () => {
  clear()
})

let calculation = []
let num1 = ''
let num2 = ''
let currentOperator = ''

// type operators into the calculator display.
function typeOperators (event) {
  event.addEventListener('click', function (event) {
    currentOperator = (event.target.innerHTML)
    textView.innerHTML = currentOperator
    num1 = calculation.join('')
    num1 = Number(num1)
    calculation = []
  }
  )
}

const operatorButtons = document.querySelectorAll('button[data-behavior="operator"]')
operatorButtons.forEach(function (event) {
  typeOperators(event)
}, false)

// type numbers into the calculator display.
document.querySelector('div[data-behavior="btn-container"]').addEventListener('click', function (event) {
  if (event.target.dataset.behavior === 'number') {
    calculation.push(event.target.innerHTML)
    textView.innerHTML = calculation.join('')
  }
})

const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

function conclude () {
  let x = calculation.join('')
  num2 = Number(x)
  equals(num1, num2)
}

function equals () {
  switch (currentOperator) {
    case '+':
      add(num1, num2)
      textView.innerHTML = add(num1, num2)
      break
    case '-':
      subtract(num1, num2)
      textView.innerHTML = subtract(num1, num2)
      break
    case 'x':
      multiply(num1, num2)
      textView.innerHTML = multiply(num1, num2)
      break
    case '/':
      divide(num1, num2)
      textView.innerHTML = divide(num1, num2)
      break
  }
}

function clear () {
  calculation = []
  num1 = ''
  num2 = ''
  currentOperator = ''
  textView.innerHTML = ''
}
