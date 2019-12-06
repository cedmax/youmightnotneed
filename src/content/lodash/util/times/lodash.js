// https://lodash.com/docs/#times
import { times } from 'lodash'

exports.simple = times(3)
// => [0, 1, 2]

exports.withIteratee = times(3, i => i + 3)
// => [3, 4, 5]
