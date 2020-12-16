import {loadInput} from '../shared/data-loader'

const loadDayFifteenInput = (): Array<number> => {
  return loadInput('day-fifteen/input.txt').split(',').map((item) => {
    return parseInt(item)
  })
}

export {loadDayFifteenInput}
