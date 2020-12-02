import {loadInput} from '../shared/data-loader'
import {IParsedPassword} from './interfaces'

const loadDayTwoInput = (): Array<string> => {
  return loadInput('day-two/input.txt').split('\n')
}

const parseRow = (row: string): IParsedPassword => {
  let matchGroups = row.match(/^(\d+)-(\d+) ([a-z]): (.*)/i)

  return {
    lowerNumber: parseInt(matchGroups[1]),
    upperNumber: parseInt(matchGroups[2]),
    letter: matchGroups[3],
    password: matchGroups[4]
  }
}

export {loadDayTwoInput, parseRow}
