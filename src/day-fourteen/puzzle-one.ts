import {convertToBinary, getSum, loadDayFourteenInput} from './shared'

let memCommands = loadDayFourteenInput()
let memSpace = {}


const addMask = (mask: string, original: string): string => {
  let originalBinary = original.split('')
  if (mask.length !== original.length) {
    throw Error('Mask length does not match original length')
  }

  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === '1' || mask[i] === '0') {
      originalBinary[i] = mask[i]
    }
  }

  return originalBinary.join('')
}



for (let memCommand of memCommands) {
  let mask = memCommand.mask
  for (let command of memCommand.commands) {
    memSpace[command.position] = addMask(mask, convertToBinary(command.value))
  }
}

console.log(getSum(memSpace))
