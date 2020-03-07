// https://lodash.com/docs/#pullAt
import { pullAt } from 'lodash'

const array = ['a', 'b', 'c', 'd']

exports.return = pullAt(array, [1, 3])
// => ['b', 'd']

exports.array = array
// => ['a', 'c']
