import {loadDayTwelveInput} from './shared'

let commands = loadDayTwelveInput()


const turnRight = (currentFacing: string, angle: number): string => {
  const DIRECTIONS = ['N', 'E', 'S', 'W']

  let index = DIRECTIONS.indexOf(currentFacing)

  let indexToMove = angle / 90

  if ((index + indexToMove) > DIRECTIONS.length - 1) {
    return DIRECTIONS[(index + indexToMove) % DIRECTIONS.length]
  }

  return DIRECTIONS[index + indexToMove]
}

const turnLeft = (currentFacing: string, angle: number): string => {
  const DIRECTIONS = ['W', 'S', 'E', 'N']

  let index = DIRECTIONS.indexOf(currentFacing)

  let indexToMove = angle / 90

  if ((index + indexToMove) > DIRECTIONS.length - 1) {
    return DIRECTIONS[(index + indexToMove) % DIRECTIONS.length]
  }

  return DIRECTIONS[index + indexToMove]
}


let vertical = 0
let horizontal = 0
let facing = 'E'

const moveForward = (facing: string, amount: number): void => {
  if (facing === 'N') {
    vertical += amount
  }
  else if (facing === 'E') {
    horizontal += amount
  }
  else if (facing === 'S') {
    vertical -= amount
  }
  else if (facing === 'W') {
    horizontal -= amount
  }
}

for (let command of commands) {
  console.log(`vertical ${vertical} horizontal ${horizontal}`)
  if (command.type === 'R') {
    facing = turnRight(facing, command.value)
  }
  else if (command.type === 'L') {
    facing = turnLeft(facing, command.value)
  }
  else if (command.type === 'F') {
    moveForward(facing, command.value)
  }
  else {
    moveForward(command.type, command.value)
  }
}

console.log(`Manhattan distance: ${Math.abs(vertical) + Math.abs(horizontal)}`)
