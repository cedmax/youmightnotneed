// https://lodash.com/docs/#invert
import { invert } from 'lodash'

const object = { a: 1, b: 2, c: 1 }

module.exports = invert(object)
// => { '1': 'c', '2': 'b' }
