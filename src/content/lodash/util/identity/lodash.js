// https://lodash.com/docs/#identity
import { identity } from 'lodash'

const object = { a: 1 }

module.exports = identity(object) === object
// => true
