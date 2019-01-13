import { clamp } from 'lodash'

exports.noOptionalArg = clamp(-10, -5)
// => -10

exports.lower = clamp(-10, -5, 5)
// => -5

exports.higher = clamp(10, -5, 5)
// => 5
