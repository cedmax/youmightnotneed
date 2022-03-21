// https://lodash.com/docs/#flattenDepth
import { flattenDepth } from 'lodash'

var array = [1, [2, [3, [4]], 5]]

exports.example1 = flattenDepth(array, 1)
// => [1, 2, [3, [4]], 5]

exports.example2 = flattenDepth(array, 2)
// => [1, 2, 3, [4], 5]
