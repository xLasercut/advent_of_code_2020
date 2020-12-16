import {TrainTicket, TrainTicketField} from './shared'

interface ITranslation {
  fields: Array<TrainTicketField>
  yourTicket: TrainTicket
  otherTickets: Array<TrainTicket>
}

interface ITicketFieldRange {
  min: number
  max: number
}

export {ITicketFieldRange, ITranslation}
