import { fill } from 'lodash'

exports.array = fill([1, 2, 3], 'a')
// => ['a', 'a', 'a']

exports.arrayConstructor = fill(Array(3), 2)
// => [2, 2, 2]

exports.partial = fill([4, 6, 8, 10], '*', 1, 3)
// => [4, '*', '*', 10]
