// https://lodash.com/docs/#rangeRight
import { rangeRight } from 'lodash'

exports.example1 = rangeRight(4)
// => [3, 2, 1, 0]

exports.example2 = rangeRight(-4)
// => [-3, -2, -1, 0]

exports.example3 = rangeRight(1, 5)
// => [4, 3, 2, 1]

exports.example4 = rangeRight(0, 20, 5)
// => [15, 10, 5, 0]

exports.example5 = rangeRight(0, -4, -1)
// => [-3, -2, -1, 0]

exports.example6 = rangeRight(1, 4, 0)
// => [1, 1, 1]

exports.example7 = rangeRight(0)
// => []
