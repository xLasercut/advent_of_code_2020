import {loadDayFifteenInput} from './shared'

let startingNumbers = loadDayFifteenInput()

let numbers = new Map()

for (let i = 0; i < startingNumbers.length - 1; i++) {
  numbers.set(startingNumbers[i], i)
}

let previousNumber = startingNumbers[startingNumbers.length - 1]

for (let i = startingNumbers.length; i < 30000000; i++) {
  let currentNumber = 0
  if (numbers.has(previousNumber)) {
    currentNumber = (i - 1) - numbers.get(previousNumber)
  }

  numbers.set(previousNumber, i - 1)
  previousNumber = currentNumber
}

console.log(previousNumber)
