import {loadInput} from '../shared/data-loader'

const loadDaySixInput = (): Array<string> => {
  return loadInput('day-six/input.txt').split('\n\n')
}

export {loadDaySixInput}
