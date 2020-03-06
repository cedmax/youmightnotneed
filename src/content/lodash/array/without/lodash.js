// https://lodash.com/docs/#without
import { without } from 'lodash'

const array = [2, 1, 2, 3]
exports.return = without(array, 1, 2)
// => [3]

exports.array = array
// => [2, 1, 2, 3]
