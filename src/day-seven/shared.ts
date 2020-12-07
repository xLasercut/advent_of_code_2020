import {loadInput} from '../shared/data-loader'
import {IBag, IContainedBag} from './interfaces'

const BAG_REGEX = new RegExp(/(\d+) (.*?) (?:bag)/)

const parseContainedBag = (containedBag: string): IContainedBag => {
  let matched = containedBag.match(BAG_REGEX)

  if (!matched) {
    return null
  }

  return {
    amount: parseInt(matched[1]),
    color: matched[2]
  }
}

const loadDaySevenInput = (): Array<IBag> => {
  let bags = loadInput('day-seven/input.txt').split('\n')
  return bags.map((bag: string): IBag => {
    let bagSplit = bag.split(' bags contain')

    let containedBags: Array<IContainedBag> = []

    for (let containedBag of bagSplit[1].split(',')) {
      let parsedContainedBag = parseContainedBag(containedBag)
      if (parsedContainedBag) {
        containedBags.push(parsedContainedBag)
      }
    }

    let containedBagsCount = null
    if (containedBags.length === 0) {
      containedBagsCount = 0
    }

    return {
      color: bagSplit[0],
      contains: containedBags,
      totalContainedBagCount: containedBagsCount
    }
  })
}

const getBagsThatContainBagColor = (bags: Array<IBag>, color: string): Set<string> => {
  let inputBags = new Set([color])
  let oldInputBagsSize = 0

  while (true) {
    for (let bag of bags) {
      for (let inputBag of [...inputBags]) {
        for (let containedBag of bag.contains) {
          if (containedBag.color.includes(inputBag)) {
            inputBags.add(bag.color)
          }
        }
      }
    }

    if (oldInputBagsSize == inputBags.size) {
      inputBags.delete(color)
      return inputBags
    }

    oldInputBagsSize = inputBags.size
  }
}

export {loadDaySevenInput, getBagsThatContainBagColor}
