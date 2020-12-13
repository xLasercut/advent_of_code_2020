import {loadDayThirteenInput} from './shared'

let timetable = loadDayThirteenInput()
let buses = timetable.buses

let jump = buses[0].id
let t0 = 0

for (let i = 1; i < buses.length; i++) {
  while ((t0 + buses[i].offset) % buses[i].id !== 0) {
    t0 += jump
  }
  jump *= buses[i].id
}

console.log(`Earliest t0: ${t0}`)
