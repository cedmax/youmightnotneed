import { floor } from 'lodash'

exports.floor = floor(4.006)
// => 4

exports.precision = floor(0.046, 2)
// => 0.04

exports.negPrecision = floor(4060, -2)
// => 4000
