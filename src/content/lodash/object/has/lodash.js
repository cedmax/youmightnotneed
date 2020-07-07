// https://lodash.com/docs/#has
import { has } from 'lodash'

const object = { a: { b: 2 } }

exports.simple = has(object, 'a')
// => true

exports.nested = has(object, 'a.b')
// => true

exports.array = has(object, ['a', 'b'])
// => true

exports.missing = has(object, ['a', 'c'])
// => false
