// https://lodash.com/docs/#differenceBy
import { differenceBy } from 'lodash'

exports.arrays = differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
// => [1.2]

// The `_.property` iteratee shorthand.
exports.objects = differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x')
// => [{ 'x': 2 }]
