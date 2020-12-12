import {loadInput} from '../shared/data-loader'

const loadDayTenInput = (): Array<number> => {
  let unsortedInput = loadInput('day-ten/input.txt').split('\n')
    .map((item: string): number => {
      return parseInt(item)
    })

  unsortedInput.push(0)
  return unsortedInput.sort((a: number, b: number) => {
      if (a > b) {
        return 1
      }
      return -1
    })
}

export {loadDayTenInput}
