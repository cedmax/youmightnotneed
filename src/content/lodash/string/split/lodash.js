// https://lodash.com/docs/#split
import { split } from 'lodash'

exports.all = split('a-b-c', '-')
// => ['a', 'b', 'c']

exports.justTwo = split('a-b-c', '-', 2)
// => ['a', 'b']
