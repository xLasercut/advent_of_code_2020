import {loadDaySixInput} from './shared'

const getGroupYesCount = (groupAnswerString: string): number => {
  let groupAnswers = groupAnswerString.split('\n').join('').split('')
  return new Set(groupAnswers).size
}

let answers = loadDaySixInput()

let totalYesCount = 0

for (let answer of answers) {
  let yesCount = getGroupYesCount(answer)
  totalYesCount += yesCount
}

console.log(`Total yes count: ${totalYesCount}`)
