// https://lodash.com/docs/#xor
import { xor } from 'lodash'

module.exports.unique = xor([2, 1, 4], [2, 3, 2, 6])
// => [1, 4, 3, 6]

module.exports.duplicates = xor([1, 1, 2], [2, 2, 3])
// => [1, 3]

module.exports.variadic = xor([1], [2], [1, 3], [2, 4])
// => [3, 4]
