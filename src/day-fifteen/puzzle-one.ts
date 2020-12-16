import {loadDayFifteenInput} from './shared'

let startingNumbers = loadDayFifteenInput()

let numbers = []

for (let i = 0; i < startingNumbers.length; i++) {
  numbers[i] = startingNumbers[i]
}

for (let i = startingNumbers.length; i < 2020; i++) {
  let previousNumber = numbers[i-1]
  if (numbers.slice(0, i-1).includes(previousNumber)) {
    numbers[i] = i - 1 - numbers.slice(0, i-1).lastIndexOf(previousNumber)
  }
  else {
    numbers[i] = 0
  }
}

console.log(numbers[2019])
