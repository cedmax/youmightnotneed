// https://lodash.com/docs/#curry
import { curry } from 'lodash'

const abc = (a, b, c) => [a, b, c]

const curried = curry(abc)

exports.curry = curried(1)(2)(3)
// => [1, 2, 3]

exports.moreargs = curried(1, 2)(3)
// => [1, 2, 3]

exports.allargs = curried(1, 2, 3)
// => [1, 2, 3]
