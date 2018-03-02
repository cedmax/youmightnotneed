import { flatten } from 'lodash'

module.exports = flatten([1, [2, [3, [4]], 5]])
// => [1, 2, [3, [4]], 5]
