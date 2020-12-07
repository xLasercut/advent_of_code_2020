import {loadDaySevenInput} from './shared'
import {IBag} from './interfaces'

let yourBagColor = 'shiny gold'

let bags = loadDaySevenInput()

const getBag = (bags: Array<IBag>, color: string): IBag => {
  return bags.filter((bag) => {
    return bag.color === color
  })[0]
}

const getNullContainedBagsCount = (bags: Array<IBag>): number => {
  return bags.filter((bag) => {
    return bag.totalContainedBagCount === null
  }).length
}


while (getNullContainedBagsCount(bags) > 0) {
  for (let bag of bags) {
    let containedBagCount = 0

    for (let containedBag of bag.contains) {
      let containedBagInfo = getBag(bags, containedBag.color)
      if (containedBagInfo.totalContainedBagCount === 0) {
        containedBagCount += containedBag.amount
      }
      else if (containedBagInfo.totalContainedBagCount === null) {
        containedBagCount = null
        break
      }
      else {
        containedBagCount += (containedBag.amount * containedBagInfo.totalContainedBagCount) + containedBag.amount
      }
    }

    bag.totalContainedBagCount = containedBagCount
  }
}


console.log(`Total number of bags in ${yourBagColor} bag is ${getBag(bags, yourBagColor).totalContainedBagCount}`)
