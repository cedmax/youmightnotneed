import { fill } from 'lodash'

fill([1, 2, 3], 'a')
// => ['a', 'a', 'a']

fill(Array(3), 2)
// => [2, 2, 2]

fill([4, 6, 8, 10], '*', 1, 3)
// => [4, '*', '*', 10]
