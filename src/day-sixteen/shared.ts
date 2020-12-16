import {loadInput} from '../shared/data-loader'
import {ITicketFieldRange, ITranslation} from './interfaces'

class TrainTicketField {
  protected _name: string
  protected _ranges: Array<ITicketFieldRange>

  constructor(rawField: string) {
    let rawFieldSplit = rawField.split(':')
    this._name = rawFieldSplit[0].trim()
    this._parseRanges(rawFieldSplit[1])
  }

  protected _parseRanges(ranges: string): void {
    this._ranges = []
    let splitRange = ranges.trim().split('or')
    for (let range of splitRange) {
      let matches = range.trim().match(/(\d+)-(\d+)/)
      this._ranges.push({
        min: parseInt(matches[1]),
        max: parseInt(matches[2])
      })
    }
  }

  public validateValue(value: number): boolean {
    for (let range of this._ranges) {
      if (value >= range.min && value <= range.max) {
        return true
      }
    }
    return false
  }

  get name(): string {
    return this._name
  }
}

class TrainTicket {
  protected _ticketNumbers: Array<number>

  constructor(ticketNumbers: string) {
    this._ticketNumbers = this._parseTicketNumbers(ticketNumbers)
  }

  protected _parseTicketNumbers(ticketNumbers: string): Array<number> {
    return ticketNumbers.split(',').map((item) => {
      return parseInt(item)
    })
  }

  get numbers(): Array<number> {
    return this._ticketNumbers
  }
}

const loadDaySixteenInput = (): ITranslation => {
  let inputSplit = loadInput('day-sixteen/input.txt').split('\n\n')
  let fields = inputSplit[0].split('\n').map((item) => {
    return new TrainTicketField(item)
  })

  let yourTicket = new TrainTicket(inputSplit[1].split('\n')[1])

  let otherTickets = inputSplit[2].replace('nearby tickets:\n', '')
    .split('\n')
    .map((item) => {
      return new TrainTicket(item)
    })

  return {
    fields: fields,
    yourTicket: yourTicket,
    otherTickets: otherTickets
  }
}



export {loadDaySixteenInput, TrainTicketField, TrainTicket}
