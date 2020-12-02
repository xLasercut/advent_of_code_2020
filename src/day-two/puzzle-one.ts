import {loadDayTwoInput, parseRow} from './shared'

const letterCount = (inputString: string, letter: string): number => {
  let count = 0

  for (let char of inputString) {
    if (char === letter) {
      count += 1
    }
  }

  return count
}

let inputRows = loadDayTwoInput()

let validPasswords = []
let invalidPasswords = []

for (let row of inputRows) {
  let parsedRow = parseRow(row)

  let count = letterCount(parsedRow.password, parsedRow.letter)

  if (count < parsedRow.lowerNumber || count > parsedRow.upperNumber) {
    invalidPasswords.push(parsedRow)
  }
  else {
    validPasswords.push(parsedRow)
  }
}

console.log(`Invalid passwords: ${invalidPasswords.length}`)
console.log(`Valid passwords: ${validPasswords.length}`)
