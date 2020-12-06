import {loadDaySixInput} from './shared'

const getAllGroupMemeberYesCount = (groupAnswerString: string): number => {
  let groupAnswers = groupAnswerString.split('\n')
  let memberAnswers = groupAnswers[0].split('')
  for (let i = 1; i < groupAnswers.length; i++) {
    memberAnswers = memberAnswers.filter((x: string) => {
      return groupAnswers[i].split('').includes(x)
    })
  }

  return new Set(memberAnswers).size
}

let answers = loadDaySixInput()

let totalYesCount = 0

for (let answer of answers) {
  totalYesCount += getAllGroupMemeberYesCount(answer)
}

console.log(`Total yes count: ${totalYesCount}`)

