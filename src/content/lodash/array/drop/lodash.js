// https://lodash.com/docs/#drop
import { drop } from 'lodash'

exports.simple = drop([1, 2, 3])
// => [2, 3]

exports.withNumber = drop([1, 2, 3], 2)
// => [3]

exports.withNumberVariant = drop([1, 2, 3], 5)
// => []

exports.withZero = drop([1, 2, 3], 0)
// => [1, 2, 3]
