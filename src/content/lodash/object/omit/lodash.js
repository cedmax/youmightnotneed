// https://lodash.com/docs/#omit
import { omit } from 'lodash'

const object = { a: 1, b: '2', c: 3 }

module.exports = omit(object, ['a', 'c'])
// => { 'b': '2' }
