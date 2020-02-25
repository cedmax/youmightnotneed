// https://lodash.com/docs/#reverse
import { reverse } from 'lodash'

const array = [1, 2, 3]

exports.return = reverse(array)
// => [3, 2, 1]

exports.mutated = array
// => [3, 2, 1]
