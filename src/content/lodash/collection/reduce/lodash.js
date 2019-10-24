// https://lodash.com/docs/#reduce
import { reduce } from 'lodash'

exports.array = reduce([1, 2], (sum, n) => sum + n, 0)
// => 3

exports.object = reduce(
  { a: 1, b: 2, c: 1 },
  (result, value, key) => {
    ;(result[value] || (result[value] = [])).push(key)
    return result
  },
  {}
)
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
