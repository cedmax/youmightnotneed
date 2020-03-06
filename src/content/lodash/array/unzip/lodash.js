// https://lodash.com/docs/#unzip
import { unzip } from 'lodash'

module.exports = unzip([
  ['a', 1, true],
  ['b', 2, false],
])
// => [['a', 'b'], [1, 2], [true, false]]
