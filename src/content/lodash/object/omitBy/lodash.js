// https://lodash.com/docs/#omitBy
import { omitBy, isNumber } from 'lodash'

const object = { a: 1, b: '2', c: 3 }

module.exports = omitBy(object, isNumber)
// => { 'b': '2' }
