import { dirname } from 'path'
import viteDates from '../index.js'

console.log('viteDates', viteDates)

export default {
  root: dirname(new URL(import.meta.url).pathname),
  plugins: [viteDates()],
}
