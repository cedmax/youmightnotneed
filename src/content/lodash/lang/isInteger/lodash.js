// https://lodash.com/docs/#isInteger
import { isInteger } from 'lodash'

exports.integer = isInteger(3)
// => true

exports.lowerBound = isInteger(Number.MIN_VALUE)
// => false

exports.infinite = isInteger(Infinity)
// => false

exports.stringNumber = isInteger('3')
// => false
