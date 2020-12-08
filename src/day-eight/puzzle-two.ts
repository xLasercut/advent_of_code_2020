import {getAccumulatorValue, getNextIndex, loadDayEightInput} from './shared'
import {IInstruction} from './interfaces'

let instructions = loadDayEightInput()

const getInstructionIndices = (type: string, instructions: Array<IInstruction>): Array<number> => {
  let indices = []
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i].type === type) {
      indices.push(i)
    }
  }
  return indices
}

const checkIfInstructionsLoop = (instructions: Array<IInstruction>): boolean => {
  let indicesRan: Set<number> = new Set()
  let index = 0
  let accumulator = 0

  while (!indicesRan.has(index)) {
    let instruction = instructions[index]

    accumulator = getAccumulatorValue(accumulator, instruction)
    indicesRan.add(index)
    index = getNextIndex(index, instruction)
    if (index === instructions.length) {
      console.log(`Accumulator value is: ${accumulator}`)
      return true
    }
  }
  return false
}


let nopIndices = getInstructionIndices('nop', instructions)
let jmpIndices = getInstructionIndices('jmp', instructions)



for (let nopIndex of nopIndices) {
  instructions[nopIndex].type = 'jmp'
  let fixed = checkIfInstructionsLoop(instructions)
  instructions[nopIndex].type = 'nop'
  if (fixed) {
    console.log(`Instruction to fix: ${nopIndex}`)
  }
}


for (let jmpIndex of jmpIndices) {
  instructions[jmpIndex].type = 'nop'
  let fixed = checkIfInstructionsLoop(instructions)
  instructions[jmpIndex].type = 'jmp'
  if (fixed) {
    console.log(`Instruction to fix: ${jmpIndex}`)
  }
}
