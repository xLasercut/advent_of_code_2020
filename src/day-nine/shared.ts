import {loadInput} from '../shared/data-loader'

const loadDayNineInput = (): Array<number> => {
  return loadInput('day-nine/input.txt').split('\n')
    .map((item: string): number => {
      return parseInt(item)
    })
}

export {loadDayNineInput}
