// https://lodash.com/docs/#intersectionBy
import { intersectionBy } from 'lodash'

exports.default = intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)
// => [2.1]

// The `_.property` iteratee shorthand.
exports.property = intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')
// => [{ 'x': 1 }]
