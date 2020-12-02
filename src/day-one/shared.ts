import {loadInput} from '../shared/data-loader'

const loadDayOneInput = (): Array<number> => {
  return loadInput('day-one/input.txt').split('\n')
    .map((item: string): number => {
      return parseInt(item)
    })
}

export {loadDayOneInput}
