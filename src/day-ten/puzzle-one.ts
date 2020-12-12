import {loadDayTenInput} from './shared'

let jolts = loadDayTenInput()



let differenceOneCount = 0
let differenceThreeCount = 1

for (let i = 0; i < jolts.length - 1; i++) {
  let firstAdapter = jolts[i]
  let secondAdapter = jolts[i + 1]

  if (secondAdapter - firstAdapter === 1) {
    differenceOneCount += 1
  }
  else if (secondAdapter - firstAdapter === 3) {
    differenceThreeCount += 1
  }
  else {
    throw new Error(`Error on difference ${firstAdapter} and ${secondAdapter}`)
  }
}

console.log(`Difference of 1 jolt: ${differenceOneCount}`)
console.log(`Difference of 3 jolts: ${differenceThreeCount}`)
console.log(`Product is: ${differenceThreeCount * differenceOneCount}`)
