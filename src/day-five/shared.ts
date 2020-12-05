import {loadInput} from '../shared/data-loader'
import {IBoundType} from './types'
import {IBounds} from './interfaces'

const loadDayFiveInput = (): Array<string> => {
  return loadInput('day-five/input.txt').split('\n')
}

const calculateNewBounds = (lowerBound: number, upperBound: number, whichHalf: IBoundType): IBounds => {
  let median = (lowerBound + upperBound) / 2

  if (whichHalf === 'lower') {
    return {
      lowerBound: lowerBound,
      upperBound: median
    }
  }
  else if (whichHalf === 'upper') {
    return {
      lowerBound: median,
      upperBound: upperBound
    }
  }
  else {
    throw new Error('Invalid bound type')
  }
}


const getSeatRow = (boardingPass: string): number => {
  let lowerBound = 0
  let upperBound = 128

  for (let i = 0; i < 7; i++) {
    if (boardingPass[i] === 'F') {
      let bounds = calculateNewBounds(lowerBound, upperBound, 'lower')
      lowerBound = bounds.lowerBound
      upperBound = bounds.upperBound
    }
    else if (boardingPass[i] === 'B') {
      let bounds = calculateNewBounds(lowerBound, upperBound, 'upper')
      lowerBound = bounds.lowerBound
      upperBound = bounds.upperBound
    }
    else {
      throw new Error('Invalid seat group')
    }
  }

  return lowerBound
}

const getSeatColumn = (boardingPass: string): number => {
  let lowerBound = 0
  let upperBound = 8

  for (let i = 7; i < 10; i++) {
    if (boardingPass[i] === 'L') {
      let bounds = calculateNewBounds(lowerBound, upperBound, 'lower')
      lowerBound = bounds.lowerBound
      upperBound = bounds.upperBound
    }
    else if (boardingPass[i] === 'R') {
      let bounds = calculateNewBounds(lowerBound, upperBound, 'upper')
      lowerBound = bounds.lowerBound
      upperBound = bounds.upperBound
    }
    else {
      throw new Error('Invalid seat column group')
    }
  }

  return lowerBound
}

export {loadDayFiveInput, getSeatColumn, getSeatRow}
