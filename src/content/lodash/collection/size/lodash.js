// https://lodash.com/docs/#size
import { size } from 'lodash'

exports.array = size([1, 2, 3])
// => 3

exports.object = size({ a: 1, b: 2 })
// => 2

exports.string = size('pebbles')
// => 7
