import {collapseSeats, countFilledSeats, initialiseEmptySeats, loadDayElevenInput} from './shared'

const checkLeft = (seats: Array<Array<string>>, currentRow: number, currentCol: number): number => {
  for (let col = currentCol - 1; col >= 0; col--) {
    let seat = seats[currentRow][col]
    if (seat === '#') {
      return 1
    }
    else if (seat === 'L') {
      return 0
    }
  }

  return 0
}

const checkRight = (seats: Array<Array<string>>, currentRow: number, currentCol: number, maxCol: number): number => {
  for (let col = currentCol + 1; col <= maxCol; col++) {
    let seat = seats[currentRow][col]
    if (seat === '#') {
      return 1
    }
    else if (seat === 'L') {
      return 0
    }
  }

  return 0
}

const checkTop = (seats: Array<Array<string>>, currentRow: number, currentCol: number): number => {
  for (let row = currentRow - 1; row >= 0; row--) {
    let seat = seats[row][currentCol]
    if (seat === '#') {
      return 1
    }
    else if (seat === 'L') {
      return 0
    }
  }

  return 0
}

const checkBot = (seats: Array<Array<string>>, currentRow: number, currentCol: number, maxRow: number): number => {
  for (let row = currentRow + 1; row <= maxRow; row++) {
    let seat = seats[row][currentCol]
    if (seat === '#') {
      return 1
    }
    else if (seat === 'L') {
      return 0
    }
  }

  return 0
}

const checkTopLeft = (seats: Array<Array<string>>, currentRow: number, currentCol: number): number => {
  let end
  if (currentRow > currentCol) {
    end = currentCol
  }
  else {
    end = currentRow
  }

  for (let i = 1; i <= end; i++) {
    let row = currentRow - i
    let col = currentCol - i
    let seat = seats[row][col]
    if (seat === '#') {
      return 1
    }
    else if (seat === 'L') {
      return 0
    }
  }

  return 0
}


const checkTopRight = (seats: Array<Array<string>>, currentRow: number, currentCol: number, maxCol: number): number => {
  let start
  if (currentRow > (maxCol - currentCol)) {
    start = (maxCol - currentCol)
  }
  else {
    start = currentRow
  }

  for (let i = 1; i <= start; i++) {
    let row = currentRow - i
    let col = currentCol + i
    let seat = seats[row][col]
    if (seat === '#') {
      return 1
    }
    else if (seat === 'L') {
      return 0
    }
  }

  return 0
}


const checkBotLeft = (seats: Array<Array<string>>, currentRow: number, currentCol: number, maxRow: number): number => {
  let end
  if ((maxRow - currentRow) > currentCol) {
    end = currentCol
  }
  else {
    end = (maxRow - currentRow)
  }

  for (let i = 1; i <= end; i++) {
    let row = currentRow + i
    let col = currentCol - i
    let seat = seats[row][col]
    if (seat === '#') {
      return 1
    }
    else if (seat === 'L') {
      return 0
    }
  }

  return 0
}


const checkBotRight = (seats: Array<Array<string>>, currentRow: number, currentCol: number, maxRow: number, maxCol: number): number => {
  let end
  if ((maxRow - currentRow) > (maxCol - currentCol)) {
    end = (maxCol - currentCol)
  }
  else {
    end = (maxRow - currentRow)
  }

  for (let i = 1; i <= end; i++) {
    let row = currentRow + i
    let col = currentCol + i
    let seat = seats[row][col]
    if (seat === '#') {
      return 1
    }
    else if (seat === 'L') {
      return 0
    }
  }

  return 0
}

const getNewSeat = (seats: Array<Array<string>>, currentRow: number, currentCol: number, maxRow: number, maxCol: number): string => {
  let currentSeat = seats[currentRow][currentCol]
  if (currentSeat === '.') {
    return currentSeat
  }

  let filledCount = 0
  filledCount += checkLeft(seats, currentRow, currentCol)
  filledCount += checkRight(seats, currentRow, currentCol, maxCol)
  filledCount += checkTop(seats, currentRow, currentCol)
  filledCount += checkBot(seats, currentRow, currentCol, maxRow)
  filledCount += checkTopLeft(seats, currentRow, currentCol)
  filledCount += checkTopRight(seats, currentRow, currentCol, maxCol)
  filledCount += checkBotLeft(seats, currentRow, currentCol, maxRow)
  filledCount += checkBotRight(seats, currentRow, currentCol, maxRow, maxCol)

  if (currentSeat === 'L' && filledCount === 0) {
    return '#'
  }

  if (currentSeat === '#' && filledCount >= 5) {
    return 'L'
  }

  return currentSeat
}

const generateNewSeats = (seats: Array<Array<string>>, maxRow: number, maxCol: number): Array<Array<string>> => {
  let newSeats = initialiseEmptySeats(maxRow)
  for (let row = 0; row <= maxRow; row++) {
    for (let col = 0; col <= maxCol; col++) {
      newSeats[row][col] = getNewSeat(currentSeats, row, col, maxRow, maxRow)
    }
  }
  return newSeats
}



let d11Input = loadDayElevenInput()

let seats = d11Input.seats
let maxRow = d11Input.rows
let maxCol = d11Input.columns

let currentSeats = seats
let times = 0

while (true) {
  times += 1
  console.log(times)

  let newSeats = generateNewSeats(currentSeats, maxRow, maxCol)

  console.log(collapseSeats(newSeats))
  if (collapseSeats(newSeats) === collapseSeats(currentSeats)) {
    console.log(`Filled seat count: ${countFilledSeats(newSeats)}`)
    break
  }
  else {
    currentSeats = newSeats
  }
}
