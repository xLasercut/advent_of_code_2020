import {loadDayOneInput} from './shared'


let expenses = loadDayOneInput()

const findProducts = (): void => {
  for (let i = 0; i < expenses.length; i++) {
    for (let j = i + 1; j < expenses.length; j++) {
      if (expenses[i] + expenses[j] === 2020) {
        console.log(`Two numbers are ${expenses[i]} and ${expenses[j]}`)
        console.log(`Product is: ${expenses[i] * expenses[j]}`)
        return
      }
    }
  }
}

findProducts()
