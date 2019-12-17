// https://lodash.com/docs/#repeat
import { repeat } from 'lodash'

exports.char = repeat('*', 3)
// => '***'

exports.string = repeat('abc', 2)
// => 'abcabc'

exports.zero = repeat('abc', 0)
// => ''
