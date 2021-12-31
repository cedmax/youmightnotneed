// https://lodash.com/docs/#unionBy
import { unionBy } from 'lodash'

exports.default = unionBy([2.1], [1.2, 2.3], Math.floor)
// => [2.1, 1.2]

// The `_.property` iteratee shorthand.
exports.property = unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')
// => [{ 'x': 1 }, { 'x': 2 }]

// _.uniqBy example
exports.uniqBy = unionBy([2.1, 1.2, 2.3], Math.floor)
// => [2.1, 1.2]
