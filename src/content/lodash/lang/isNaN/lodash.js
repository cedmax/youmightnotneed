// https://lodash.com/docs/#isNaN
import { isNaN } from 'lodash'

exports.NaN = isNaN(NaN)
// => true

exports.NumberNaN = isNaN(Number(NaN))
// => true

exports.undef = isNaN(undefined)
// => false
