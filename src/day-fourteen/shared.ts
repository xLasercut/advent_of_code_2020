import {loadInput} from '../shared/data-loader'
import {IMemCommand, IMemCommands} from './interfaces'

const loadDayFourteenInput = (): Array<IMemCommands> => {
  let inputs = loadInput('day-fourteen/input.txt').split('\nmask = ')
  let maxPosition = 0

  let memCommands: Array<IMemCommands> = []

  for (let input of inputs) {
    let inputSplit = input.split('\n')
    let commands: Array<IMemCommand> = []

    for (let i = 1; i < inputSplit.length; i++) {
      let match = inputSplit[i].match(/mem\[(\d+)\] = (\d+)/)
      let position = parseInt(match[1])

      if (position > maxPosition) {
        maxPosition = position
      }
      commands.push({
        position: position,
        value: parseInt(match[2])
      })
    }

    memCommands.push({
      mask: inputSplit[0].replace('mask = ', ''),
      commands: commands
    })
  }

  return memCommands
}

const convertToBinary = (integerNumber: number): string => {
  let binary = integerNumber.toString(2)
  return '0'.repeat(36 - binary.length) + binary
}


const getSum = (binaries: Object): number => {
  let sum = 0
  for (let binary of Object.values(binaries)) {
    sum += parseInt(binary, 2)
  }
  return sum
}

export {loadDayFourteenInput, convertToBinary, getSum}
