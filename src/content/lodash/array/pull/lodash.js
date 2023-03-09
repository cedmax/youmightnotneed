// https://lodash.com/docs/#pull
import { pull } from 'lodash'

var array = ['a', 'b', 'c', 'a', 'b', 'c']
pull(array, 'a', 'c')

module.exports = array
// => ['b', 'b']
