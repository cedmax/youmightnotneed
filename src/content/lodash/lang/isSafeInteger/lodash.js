// https://lodash.com/docs/#isSafeInteger
import { isSafeInteger } from 'lodash'

exports.number = isSafeInteger(3)
// => true

exports.minValue = isSafeInteger(Number.MIN_VALUE)
// => false

exports.infinity = isSafeInteger(Infinity)
// => false

exports.string = isSafeInteger('3')
// => false
