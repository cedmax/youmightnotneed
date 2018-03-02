import { flattenDeep } from 'lodash'

module.exports = flattenDeep([1, [2, [3, [4]], 5]])
// => [1, 2, 3, 4, 5]
