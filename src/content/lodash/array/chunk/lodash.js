// https://lodash.com/docs/#chunk
import { chunk } from 'lodash'

exports.noSize = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
// => [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']]

exports.simple = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3)
// => [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]

exports.chunkSizeZero = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 0)
// => []

exports.chunkSizeNegative = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], -1)
// => []
