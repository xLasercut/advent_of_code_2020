import {loadDayNineInput} from './shared'
import {getInvalidNumber} from './puzzle-one'

let numbers = loadDayNineInput()
let invalidNumber = getInvalidNumber(25, numbers)


for (let startIndex = 0; startIndex < numbers.length; startIndex++) {
  let sum = 0
  let i = startIndex
  let sumNumbers = []
  while (sum < invalidNumber) {
    if (numbers[i] === invalidNumber) {
      break
    }
    sum += numbers[i]
    sumNumbers.push(numbers[i])
    if (sum === invalidNumber) {
      sumNumbers.sort((a, b) => {
        if (a > b) {
          return 1
        }
        return -1
      })
      console.log(sumNumbers)
      console.log(`Encryption weakness: ${sumNumbers[0] + sumNumbers[sumNumbers.length - 1]}`)
      break
    }
    i += 1
  }
}
