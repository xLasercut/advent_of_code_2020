interface IMemCommands {
  mask: string
  commands: Array<IMemCommand>
}

interface IMemCommand {
  position: number
  value: number
}

interface IMask {
  positionsToOverwrite: Array<number>
  valuesToOverwrite: Array<string>
}

export {IMemCommands, IMemCommand, IMask}
