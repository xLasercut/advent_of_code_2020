import {loadInput} from '../shared/data-loader'
import {IInstruction} from './interfaces'

const parseInstruction = (instruction: string): IInstruction => {
  let matches = instruction.match(/((?:nop)|(?:acc)|(?:jmp)) ([+-]\d+)/)
  return {
    type: matches[1],
    value: parseInt(matches[2])
  }
}


const loadDayEightInput = (): Array<IInstruction> => {
  return loadInput('day-eight/input.txt').split('\n').map((instruction) => {
    return parseInstruction(instruction)
  })
}

const getNextIndex = (currentIndex: number, instruction: IInstruction): number => {
  if (instruction.type === 'jmp') {
    return currentIndex + instruction.value
  }
  return currentIndex + 1
}

const getAccumulatorValue = (currentValue: number, instruction: IInstruction): number => {
  if (instruction.type === 'acc') {
    return currentValue + instruction.value
  }
  return currentValue
}

export {loadDayEightInput, getNextIndex, getAccumulatorValue}

