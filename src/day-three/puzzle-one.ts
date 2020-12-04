import {getPositionOnLevel, loadDayThreeInput} from './shared'



let levels = loadDayThreeInput()
let levelLength = levels[0].length

let treeCount = 0
let squareCount = 0


for (let i = 0; i < levels.length; i++) {
  let level = levels[i]
  let position = (i * 3) + 1

  let positionOnLevel = getPositionOnLevel(levelLength, position)

  if (level[positionOnLevel - 1] === '#') {
    treeCount += 1
  }
  else if (level[positionOnLevel - 1] === '.') {
    squareCount += 1
  }
  else {
    console.log('ERROR')
    console.log(positionOnLevel)
  }
}

console.log(`Tree Count: ${treeCount}`)
console.log(`Square Count: ${squareCount}`)



