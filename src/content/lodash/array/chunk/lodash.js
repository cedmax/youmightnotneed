import { chunk } from 'lodash'

exports.simple = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3)
// => [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]

exports.chunkSizeZero = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 0)
// => []

exports.chunkSizeNegative = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], -1)
// => []
