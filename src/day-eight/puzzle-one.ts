import {getAccumulatorValue, getNextIndex, loadDayEightInput} from './shared'

let instructions = loadDayEightInput()

let index = 0
let accumulator = 0
let indicesRan: Set<number> = new Set()

while (!indicesRan.has(index)) {
  let instruction = instructions[index]

  accumulator = getAccumulatorValue(accumulator, instruction)
  indicesRan.add(index)
  index = getNextIndex(index, instruction)
}

console.log(`Accumulator value is: ${accumulator}`)
