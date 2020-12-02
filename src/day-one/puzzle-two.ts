import {loadDayOneInput} from './shared'


let expenses = loadDayOneInput()

const findProducts = (): void => {
  for (let i = 0; i < expenses.length; i++) {
    for (let j = i + 1; j < expenses.length; j++) {
      if (expenses[i] + expenses[j] < 2020) {
        for (let k = i + 2; k < expenses.length; k++) {
          if (expenses[i] + expenses[j] + expenses[k] === 2020) {
            console.log(`Three numbers are ${expenses[i]}, ${expenses[j]} and ${expenses[k]}`)
            console.log(`Product is: ${expenses[i] * expenses[j] * expenses[k]}`)
            return
          }
        }
      }
    }
  }
}


findProducts()
