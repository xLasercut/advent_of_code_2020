import {getBagsThatContainBagColor, loadDaySevenInput} from './shared'

let yourBagColor = 'shiny gold'

let bags = loadDaySevenInput()

console.log(`Number of bags that can contain at least one ${yourBagColor} is ${getBagsThatContainBagColor(bags, yourBagColor).size}`)
