import {loadDayTenInput} from './shared'

let jolts = loadDayTenInput()

let paths = {}
for (let jolt of jolts) {
  paths[jolt] = 0
}

paths[0] = 1

for (let jolt of jolts) {
  for (let diff = 1; diff < 4; diff++) {
    let nextAdaptor = jolt + diff
    if (jolts.includes(nextAdaptor)) {
      paths[nextAdaptor] += paths[jolt]
    }
  }
}

console.log(`Max number of combinations: ${paths[jolts[jolts.length - 1]]}`)
