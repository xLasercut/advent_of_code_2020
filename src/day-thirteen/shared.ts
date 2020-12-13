import {loadInput} from '../shared/data-loader'
import {IBus, IBusTimetable} from './interfaces'


const loadDayThirteenInput = (): IBusTimetable => {
  let inputs = loadInput('day-thirteen/input.txt').split('\n')
  let leavingTime = parseInt(inputs[0])
  let busSplit = inputs[1].split(',')
  let buses: Array<IBus> = []

  for (let i = 0; i < busSplit.length; i++) {
    let item = busSplit[i]
    if (item !== 'x') {
      buses.push({
        id: parseInt(item),
        offset: i
      })
    }
  }

  return {
    leavingTime: leavingTime,
    buses: buses
  }
}

const getEarliestDepartTime = (yourDepartTime: number, bus: number): number => {
  let multiplier = Math.ceil(yourDepartTime / bus)
  return bus * multiplier
}


export {loadDayThirteenInput, getEarliestDepartTime}
