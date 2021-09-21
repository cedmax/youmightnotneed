// https://lodash.com/docs/#flatMap
import { flatMap } from 'lodash'

module.exports = flatMap([1, 2], n => [n, n])
// => [1, 1, 2, 2]
