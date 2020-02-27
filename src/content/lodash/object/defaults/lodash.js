// https://lodash.com/docs/#defaults
import { defaults } from 'lodash'

module.exports = defaults({ a: 1 }, { b: 2 }, { a: 3 })
// // => { 'a': 1, 'b': 2 }
