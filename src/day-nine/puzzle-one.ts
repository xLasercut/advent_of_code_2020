import {loadDayNineInput} from './shared'

let numbers = loadDayNineInput()

const isNumberValid = (currentNumber: number, sumNumbers: Array<number>): boolean => {
  for (let i = 0; i < sumNumbers.length - 1; i++) {
    for (let j = i + 1; j < sumNumbers.length; j++) {
      if (sumNumbers[i] + sumNumbers[j] === currentNumber) {
        return true
      }
    }
  }
  return false
}


const getInvalidNumber = (preamble: number, numbers: Array<number>): number => {
  for (let i = preamble; i < numbers.length; i++) {
    let currentNumber = numbers[i]
    let sumNumbers = numbers.slice(i - preamble, i)

    if (!isNumberValid(currentNumber, sumNumbers)) {
      return currentNumber
    }
  }
}

let invalidNumber = getInvalidNumber(25, numbers)
console.log(`First number that is invalid is: ${invalidNumber}`)

export {getInvalidNumber}


