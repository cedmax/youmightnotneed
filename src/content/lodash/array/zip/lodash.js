// https://lodash.com/docs/#zip
import { zip } from 'lodash'

module.exports = zip(['a', 'b'], [1, 2], [true, false])
// => [['a', 1, true], ['b', 2, false]]
