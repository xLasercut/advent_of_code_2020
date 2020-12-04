import {isValidPassportField, loadDayFourInput} from './shared'

let passports = loadDayFourInput()


const isPassportValid = (passport: string): boolean => {
  let regexToValidate = [
    /byr:((19[0-9][0-9])|(20(01|02)))/,
    /iyr:20((1[0-9])|(20))/,
    /eyr:20((2[0-9])|(30))/,
    /hgt:((1(([5-8][0-9])|(9[0-3]))cm)|((([5-6][0-9])|(7[0-6]))in))/,
    /hcl:#[a-f0-9]{6}/,
    /ecl:((amb)|(blu)|(brn)|(gry)|(grn)|(hzl)|(oth))/,
    /pid:[0-9]{9}/
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
