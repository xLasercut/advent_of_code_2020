import {getSeatColumn, getSeatRow, loadDayFiveInput} from './shared'

let boardingPasses = loadDayFiveInput()

let highestId = 0

for (let boardingPass of boardingPasses) {
  let seatRow = getSeatRow(boardingPass)
  let seatColumn = getSeatColumn(boardingPass)
  let seatId = (seatRow * 8) + seatColumn
  if (seatId > highestId) {
    highestId = seatId
  }
  console.log(`Row: ${seatRow} Column: ${seatColumn} ID: ${seatId}`)
}

console.log(`Highest seat ID: ${highestId}`)


