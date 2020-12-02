import * as fs from 'fs'
import * as path from 'path'
import {DATA_DIR} from './constants'


const loadInput = (filepath: string): string => {
  return fs.readFileSync(path.join(DATA_DIR, filepath), {encoding: 'utf-8'})
}


export {loadInput}
