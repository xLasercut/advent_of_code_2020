import {loadInput} from '../shared/data-loader'
import {ID11Input} from './interfaces'

const loadDayElevenInput = (): ID11Input => {
  let seatRows = loadInput('day-eleven/input.txt').split('\n')
  let seats = []
  let rowCount = seatRows.length - 1
  let colCount = 0

  for (let seatRow of seatRows) {
    seats.push(seatRow.split(''))
    colCount = seatRow.split('').length - 1
  }

  return {
    seats: seats,
    rows: rowCount,
    columns: colCount
  }
}

const collapseSeats = (seats: Array<Array<string>>): string => {
  return seats.map((row) => {
    return row.join('')
  }).join('\n')
}

const countFilledSeats = (seats: Array<Array<string>>): number => {
  let count = 0
  for (let seat of collapseSeats(seats)) {
    if (seat === '#') {
      count += 1
    }
  }
  return count
}


const initialiseEmptySeats = (maxRows: number): Array<Array<string>> => {
  let newSeats = []
  for (let row = 0; row <= maxRows; row++) {
    newSeats.push([])
  }
  return newSeats
}

export {loadDayElevenInput, collapseSeats, initialiseEmptySeats, countFilledSeats}
