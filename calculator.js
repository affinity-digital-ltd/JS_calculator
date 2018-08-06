
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
let operatorButtons = document.querySelectorAll('button[data-behavior="operator"]')
operatorButtons.forEach(function (e, index) {
  e.addEventListener('click', function (e) {
    currentOperator = (e.target.innerHTML)
    textView.innerHTML = currentOperator
    num1 = calculation.join('')
    num1 = Number(num1)
    calculation = []
  }, false)
})
/*let addOperators = function (e) {
  e.addEventListener('click', function (e) {
    currentOperator = (e.target.innerHTML)
    textView.innerHTML = currentOperator
    let x = calculation.join('')
    num1 = Number(x)
    calculation = []
  }, false)
}
for (var i = 0; i < operatorButtons.length; i++) {
  addOperators(operatorButtons[i])
}*/

// type numbers into the calculator display.
document.querySelector('div[data-behavior="btn-container"]').addEventListener('click', function (e) {
  if (e.target.dataset.behavior === 'number') {
    calculation.push(e.target.innerHTML)
    textView.innerHTML = calculation.join('')
  }
})

function conclude () {
  let x = calculation.join('')
  num2 = Number(x)
  equals()
}
const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2
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
