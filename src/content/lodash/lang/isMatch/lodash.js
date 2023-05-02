// https://lodash.com/docs/#isMatch
import { isMatch } from 'lodash'

const object = { 'a': 1, 'b': 2, c: { a: 2 }, d: [1, 2, 3], e: {} }

exports.match = isMatch(object, { 'b': 2 })
// => true

exports.noMatch = isMatch(object, { 'b': 1 })
// => false

exports.matchNested = isMatch(object, { 'c': { a: 2 } })
// => true

exports.noMatchNested = isMatch(object, { 'c': { a: 3 } })
// => false

exports.matchArray = isMatch(object, { 'd': [1, 2, 3] })
// => true

exports.matchPartialArray = isMatch(object, { 'd': [2] })
// => true

exports.noMatchArray = isMatch(object, { 'd': 2 })
// => false

exports.empty = isMatch(object, { 'e': {} })
// => true
