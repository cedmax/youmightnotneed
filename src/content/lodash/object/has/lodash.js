// https://lodash.com/docs/#has
import { has } from 'lodash'

const object = { a: { bar: 2 } }

exports.simple = has(object, 'a')
// => true

exports.nested = has(object, 'a.bar')
// => true

exports.array = has(object, ['a', 'bar'])
// => true

exports.missing = has(object, ['a', 'c'])
// => false
