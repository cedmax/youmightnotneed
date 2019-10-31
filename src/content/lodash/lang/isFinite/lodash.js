// https://lodash.com/docs/#isFinite
import { isFinite } from 'lodash'

exports.integer = isFinite(3)
// => true

exports.lowerBound = isFinite(Number.MIN_VALUE)
// => true

exports.infinite = isFinite(Infinity)
// => false

exports.stringNumber = isFinite('3')
// => false
