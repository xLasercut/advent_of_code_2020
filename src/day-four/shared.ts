import {loadInput} from '../shared/data-loader'

const loadDayFourInput = (): Array<string> => {
  return loadInput('day-four/input.txt').split('\n\n')
}

const isValidPassportField = (passport: string, regex: RegExp): boolean => {
  if (passport.match(regex)) {
    return true
  }
  return false
}

export {loadDayFourInput, isValidPassportField}
