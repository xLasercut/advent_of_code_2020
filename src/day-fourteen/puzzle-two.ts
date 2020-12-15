import {convertToBinary, getSum, loadDayFourteenInput} from './shared'
import {IMask} from './interfaces'

let memCommands = loadDayFourteenInput()
let memSpace = {}


const parseMask = (mask: string): IMask => {
  let xCount = 0
  let positions = []
  let values = []
  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === 'X') {
      positions.push(i)
      xCount += 1
    }
  }

  for (let j = 0; j < Math.pow(2, xCount); j++) {
    values.push('0'.repeat(xCount - j.toString(2).length) + j.toString(2))
  }

  return {
    valuesToOverwrite: values,
    positionsToOverwrite: positions
  }
}

const addPrimaryMask = (address: string, mask: string): Array<string> => {
  let newAddress = address.split('')

  for (let i = 0; i < address.length; i++) {
    if (mask[i] === '1') {
      newAddress[i] = '1'
    }
  }
  return newAddress
}

const getAddressesToWrite = (startingAddress: number, parsedMask: IMask, mask: string): Array<number> => {
  let addressesToWrite = []
  let convertedStartingAddress = convertToBinary(startingAddress)

  for (let valueToOverwrite of parsedMask.valuesToOverwrite) {
    let newAddress = addPrimaryMask(convertedStartingAddress, mask)
    for (let i = 0; i < parsedMask.positionsToOverwrite.length; i++) {
      newAddress[parsedMask.positionsToOverwrite[i]] = valueToOverwrite[i]
    }
    addressesToWrite.push(parseInt(newAddress.join(''), 2))
  }

  return addressesToWrite
}



for (let memCommand of memCommands) {
  let mask = memCommand.mask
  let parsedMask = parseMask(mask)

  for (let command of memCommand.commands) {
    let addresses = getAddressesToWrite(command.position, parsedMask, mask)

    for (let address of addresses) {
      memSpace[address] = convertToBinary(command.value)
    }
  }
}

console.log(getSum(memSpace))
