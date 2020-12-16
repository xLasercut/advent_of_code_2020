import {loadDaySixteenInput} from './shared'

let translations = loadDaySixteenInput()

let invalidValues = []

for (let ticket of translations.otherTickets) {
  for (let ticketValue of ticket.numbers) {
    let valid = false
    for (let field of translations.fields) {
      if (field.validateValue(ticketValue)) {
        valid = true
      }
    }

    if (!valid) {
      invalidValues.push(ticketValue)
    }
  }
}

console.log(invalidValues.reduce((a, b) => a + b, 0))
