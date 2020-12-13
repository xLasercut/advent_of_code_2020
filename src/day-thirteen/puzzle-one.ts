import {getEarliestDepartTime, loadDayThirteenInput} from './shared'

let timetable = loadDayThirteenInput()


let minTime = 99999999999999
let minBusId = 9999999999999


for (let bus of timetable.buses) {
  let departTime = getEarliestDepartTime(timetable.leavingTime, bus.id)

  if (departTime < minTime) {
    minTime = departTime
    minBusId = bus.id
  }
}

console.log(`Bus ID: ${minBusId}, Depart Time: ${minTime}`)
console.log(`Multiplier: ${(minTime - timetable.leavingTime) * minBusId}`)
