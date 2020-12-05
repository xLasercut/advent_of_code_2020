import {getSeatColumn, getSeatRow, loadDayFiveInput} from './shared'

let boardingPasses = loadDayFiveInput()

let seatIds = []

for (let boardingPass of boardingPasses) {
  let seatRow = getSeatRow(boardingPass)
  let seatColumn = getSeatColumn(boardingPass)
  let seatId = (seatRow * 8) + seatColumn
  seatIds.push(seatId)
  console.log(`Row: ${seatRow} Column: ${seatColumn} ID: ${seatId}`)
}

let sortedSeatIds = seatIds.sort((a: number, b: number) => {
  if (a > b) {
    return 1
  }
  else {
    return -1
  }
})

for (let i = 0; i < sortedSeatIds.length - 1; i++) {
  if (sortedSeatIds[i+1] - sortedSeatIds[i] !== 1) {
    console.log(`Your seat ID is: ${sortedSeatIds[i] + 1}`)
    break
  }
}


