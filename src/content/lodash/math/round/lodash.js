// https://lodash.com/docs/#round
import { round } from 'lodash'

exports.round = round(4.006)
// => 4

exports.precision = round(4.006, 2)
// => 4.01

exports.negPrecision = round(4060, -2)
// => 4100
