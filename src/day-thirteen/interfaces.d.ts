interface IBusTimetable {
  leavingTime: number
  buses: Array<IBus>
}

interface IBus {
  id: number
  offset: number
}

interface IBusResult {
  found: boolean
  t0: number
}

export {IBusTimetable, IBus, IBusResult}
