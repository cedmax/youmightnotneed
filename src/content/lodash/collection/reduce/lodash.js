import { reduce } from 'lodash'

module.exports = reduce([0, 1, 2, 3], (a, b) => a + b)
// => 6
