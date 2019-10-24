// https://lodash.com/docs/#concat
import { concat } from 'lodash'

module.exports = concat([1], 2, [3], [[4]])
// => [1, 2, 3, [4]]
