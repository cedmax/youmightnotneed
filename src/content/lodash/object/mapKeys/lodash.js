// https://lodash.com/docs/#mapKeys
import { mapKeys } from 'lodash'

module.exports = mapKeys({ a: 1, b: 2 }, (value, key) => key + value)
// => { 'a1': 1, 'b2': 2 }
