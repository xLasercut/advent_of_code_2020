import {loadInput} from '../shared/data-loader'
import {ICommand} from './interfaces'



const loadDayTwelveInput = (): Array<ICommand> => {
  return loadInput('day-twelve/input.txt').split('\n').map((item: string) => {
      let match = item.match(/([a-zA-Z])(\d+)/)

      return {
        type: match[1],
        value: parseInt(match[2])
      }
    })
}

export {loadDayTwelveInput}
