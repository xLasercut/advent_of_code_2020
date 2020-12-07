interface IBag {
  color: string
  contains: Array<IContainedBag>
  totalContainedBagCount: number
}

interface IContainedBag {
  amount: number
  color: string
}

export {IBag, IContainedBag}
