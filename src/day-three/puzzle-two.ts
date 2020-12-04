import {getPositionOnLevel, loadDayThreeInput} from './shared'
import {ISlopeCounts} from './interfaces'


let levels = loadDayThreeInput()
let levelLength = levels[0].length


const getLevelCounts = (right: number, down: number): ISlopeCounts => {
  let treeCount = 0
  let squareCount = 0
  let position = 1

  for (let i = 0; i < levels.length; i+= down) {
    let level = levels[i]

    let positionOnLevel = getPositionOnLevel(levelLength, position)

    if (level[positionOnLevel - 1] === '#') {
      treeCount += 1
    }
    else if (level[positionOnLevel - 1] === '.') {
      squareCount += 1
    }
    else {
      throw new Error('ERROR')
    }

    position += right
  }

  return {
    treeCount: treeCount,
    squareCount: squareCount
  }
}

const printCounts = (text: string, counts: ISlopeCounts): void => {
  console.log('----------------------')
  console.log(text)
  console.log('----------------------')
  console.log(`Tree Count: ${counts.treeCount}`)
  console.log(`Square Count: ${counts.squareCount}`)
}

let r1d1 = getLevelCounts(1, 1)
let r3d1 = getLevelCounts(3, 1)
let r5d1 = getLevelCounts(5, 1)
let r7d1 = getLevelCounts(7, 1)
let r1d2 = getLevelCounts(1, 2)



printCounts('r1d1', r1d1)
printCounts('r3d1', r3d1)
printCounts('r5d1', r5d1)
printCounts('r7d1', r7d1)
printCounts('r1d2', r1d2)


console.log(`Tree count product: ${r1d1.treeCount * r1d2.treeCount * r3d1.treeCount * r5d1.treeCount * r7d1.treeCount}`)

