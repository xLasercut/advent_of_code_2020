import {loadDaySixteenInput} from './shared'

let translations = loadDaySixteenInput()

let otherTickets = translations.otherTickets
let validTickets = []
let yourTicket = translations.yourTicket
let ticketFields = translations.fields
let fieldsInCorrectOrder = {}

for (let ticket of otherTickets) {
  let ticketValid = true
  for (let ticketValue of ticket.numbers) {
    let valid = false
    for (let field of translations.fields) {
      if (field.validateValue(ticketValue)) {
        valid = true
      }
    }
    if (!valid) {
      ticketValid = false
      break
    }
  }

  if (ticketValid) {
    validTickets.push(ticket)
  }
}

for (let field of ticketFields) {
  for (let i = 0; i < validTickets[0].numbers.length; i++) {
    let valid = true
    for (let ticket of validTickets) {
      if (!field.validateValue(ticket.numbers[i])) {
        valid = false
        break
      }
    }
    if (valid) {
      if (!fieldsInCorrectOrder[i]) {
        fieldsInCorrectOrder[i] = []
      }
      fieldsInCorrectOrder[i].push(field)
    }
  }
}

let orders = []

let length = 1

while (orders.length != ticketFields.length) {
  for (let key in fieldsInCorrectOrder) {
    if (fieldsInCorrectOrder[key].length === length) {
      orders.push(key)
    }
  }
  length++
}

let finalFields = {}

finalFields[orders[0]] = fieldsInCorrectOrder[orders[0]][0]

for (let i = 1; i < orders.length; i++) {
  let previousFields = fieldsInCorrectOrder[orders[i - 1]]
  let currentFields = fieldsInCorrectOrder[orders[i]]

  for (let field of currentFields) {
    if (!previousFields.includes(field)) {
      finalFields[orders[i]] = field
      break
    }
  }
}

let total = 1

for (let position in finalFields) {
  let field = finalFields[position]

  if (field.name.includes('departure')) {
    total *= yourTicket.numbers[parseInt(position)]
  }
}

console.log(total)
