import {isValidPassportField, loadDayFourInput} from './shared'

let passports = loadDayFourInput()


const isPassportValid = (passport: string): boolean => {
  let regexToValidate = [
    /byr:/,
    /iyr:/,
    /eyr:/,
    /hgt:/,
    /hcl:/,
    /ecl:/,
    /pid:/
  ]

  for (let regex of regexToValidate) {
    if (!isValidPassportField(passport, regex)) {
      return false
    }
  }

  return true
}

let validCount = 0
let invalidCount = 0

for (let passport of passports) {
  if (isPassportValid(passport)) {
    validCount += 1
  }
  else {
    invalidCount += 1
  }
}

console.log(`Valid count: ${validCount}`)
console.log(`Invalid count: ${invalidCount}`)
