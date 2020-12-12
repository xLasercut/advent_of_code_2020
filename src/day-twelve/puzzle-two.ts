import {loadDayTwelveInput} from './shared'

let commands = loadDayTwelveInput()


let vertical = 0
let horizontal = 0
let wayPointVertical = 1
let wayPointHorizontal = 10

const moveWayPoint = (facing: string, amount: number): void => {
  if (facing === 'N') {
    wayPointVertical += amount
  }
  else if (facing === 'E') {
    wayPointHorizontal += amount
  }
  else if (facing === 'S') {
    wayPointVertical -= amount
  }
  else if (facing === 'W') {
    wayPointHorizontal -= amount
  }
  else {
    throw Error('INVALID DIRECTION')
  }
}

const rotateWayPointClockWise = (angle: number): void => {
  let oldWayPointVertical = wayPointVertical
  let oldWayPointHorizontal = wayPointHorizontal

  if (angle === 90) {
    wayPointHorizontal = oldWayPointVertical
    wayPointVertical = (-1 * oldWayPointHorizontal)
  }
  else if (angle === 180) {
    wayPointHorizontal = (-1 * oldWayPointHorizontal)
    wayPointVertical = (-1 * oldWayPointVertical)
  }
  else if (angle === 270) {
    wayPointHorizontal = (-1 * oldWayPointVertical)
    wayPointVertical = oldWayPointHorizontal
  }
  else {
    throw Error('INVALID ANGLE CLOCKWISE')
  }
}

const rotateWayPointAntiClockWise = (angle: number): void => {
  let oldWayPointVertical = wayPointVertical
  let oldWayPointHorizontal = wayPointHorizontal

  if (angle === 90) {
    wayPointHorizontal = (-1 * oldWayPointVertical)
    wayPointVertical = oldWayPointHorizontal
  }
  else if (angle === 180) {
    wayPointHorizontal = (-1 * oldWayPointHorizontal)
    wayPointVertical = (-1 * oldWayPointVertical)
  }
  else if (angle === 270) {
    wayPointHorizontal = oldWayPointVertical
    wayPointVertical = (-1 * oldWayPointHorizontal)
  }
  else {
    throw Error('INVALID ANGLE ANTICLOCKWISE')
  }
}

const moveShip = (amount: number): void => {
  vertical += (wayPointVertical * amount)
  horizontal += (wayPointHorizontal * amount)
}

for (let command of commands) {

  if (command.type === 'R') {
    rotateWayPointClockWise(command.value)
  }
  else if (command.type === 'L') {
    rotateWayPointAntiClockWise(command.value)
  }
  else if (command.type === 'F') {
    moveShip(command.value)
  }
  else {
    moveWayPoint(command.type, command.value)
  }
  console.log(`vertical ${vertical} horizontal ${horizontal}`)
}

console.log(`Manhattan distance: ${Math.abs(vertical) + Math.abs(horizontal)}`)
