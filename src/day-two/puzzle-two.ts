import {loadDayTwoInput, parseRow} from './shared'

const isValidPassword = (password: string, letter: string, positionOne: number, positionTwo: number): boolean => {
  return (
    (password[positionOne - 1] === letter && password[positionTwo - 1] !== letter) ||
    (password[positionOne - 1] !== letter && password[positionTwo - 1] === letter)
  )
}

let inputRows = loadDayTwoInput()

let validPasswords = []
let invalidPasswords = []

for (let row of inputRows) {
  let parsedRow = parseRow(row)

  if (isValidPassword(parsedRow.password, parsedRow.letter, parsedRow.lowerNumber, parsedRow.upperNumber)) {
    validPasswords.push(parsedRow)
  }
  else {
    invalidPasswords.push(parsedRow)
  }
}

console.log(`Invalid passwords: ${invalidPasswords.length}`)
console.log(`Valid passwords: ${validPasswords.length}`)
