// https://lodash.com/docs/#reject
import { reject } from 'lodash'

module.exports = reject(
  ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  char => char === 'd'
)
// => [['a', 'b', 'c', 'e', 'f', 'g']]
