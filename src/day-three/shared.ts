import {loadInput} from '../shared/data-loader'

const loadDayThreeInput = (): Array<string> => {
  return loadInput('day-three/input.txt').split('\n')
}

const getPositionOnLevel = (levelLength: number, position: number): number => {
  if (position < levelLength) {
    return position
  }

  let remainder = position % levelLength

  if (remainder === 0) {
    return levelLength
  }

  while (remainder > levelLength) {
    remainder = remainder % levelLength
  }

  return remainder
}

export {loadDayThreeInput, getPositionOnLevel}
