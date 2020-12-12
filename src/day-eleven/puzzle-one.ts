import {collapseSeats, countFilledSeats, initialiseEmptySeats, loadDayElevenInput} from './shared'

let d11Input = loadDayElevenInput()

let seats = d11Input.seats
let maxRows = d11Input.rows
let maxCols = d11Input.columns

const getNewSeat = (seats: Array<Array<string>>, row: number, col: number, maxRow: number, maxCol: number): string => {
  let currentSeat = seats[row][col]
  if (currentSeat === '.') {
    return currentSeat
  }

  let filledCount = getAdjacentFilledSeatCount(seats, row, col, maxRow, maxCol)

  if (currentSeat === 'L' && filledCount === 0) {
    return '#'
  }

  if (currentSeat === '#' && filledCount >= 4) {
    return 'L'
  }

  return currentSeat
}

const getAdjacentFilledSeatCount = (seats: Array<Array<string>>, currentRow: number, currentCol: number, maxRow: number, maxCol: number): number => {
  let count = 0

  let startRow = currentRow - 1

  if (startRow < 0) {
    startRow = 0
  }

  let endRow = currentRow + 1

  if (endRow > maxRow) {
    endRow = maxRow
  }

  let startCol = currentCol - 1

  if (startCol < 0) {
    startCol = 0
  }

  let endCol = currentCol + 1

  if (endCol > maxCol) {
    endCol = maxCol
  }

  for (let row = startRow; row <= endRow; row++) {
    for (let col = startCol; col <= endCol; col++) {
      if (!(row === currentRow && col === currentCol)) {
        if (seats[row][col] === '#') {
          count += 1
        }
      }
    }
  }

  return count
}

const generateNewSeats = (currentSeats, maxRows, maxCols): Array<Array<string>> => {
  let newSeats = initialiseEmptySeats(maxRows)
  for (let row = 0; row <= maxRows; row++) {
    for (let col = 0; col <= maxCols; col++) {
      newSeats[row][col] = getNewSeat(currentSeats, row, col, maxRows, maxCols)
    }
  }
  return newSeats
}

let currentSeats = seats
let times = 0

while (true) {
  times += 1
  console.log(times)

  let newSeats = generateNewSeats(currentSeats, maxRows, maxCols)

  if (collapseSeats(newSeats) === collapseSeats(currentSeats)) {
    console.log(collapseSeats(newSeats))
    console.log(`Filled seat count: ${countFilledSeats(newSeats)}`)
    break
  }
  else {
    currentSeats = newSeats
  }
}

