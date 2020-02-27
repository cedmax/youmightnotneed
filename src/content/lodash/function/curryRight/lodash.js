// https://lodash.com/docs/#curryRight
import { curryRight } from 'lodash'

const abc = (a, b, c) => [a, b, c]

const curried = curryRight(abc)

exports.curry = curried(3)(2)(1)
// => [1, 2, 3]

exports.moreargs = curried(2, 3)(1)
// => [1, 2, 3]

exports.allargs = curried(1, 2, 3)
// => [1, 2, 3]
