// https://lodash.com/docs/#nthArg
import { nthArg } from 'lodash'

let func = nthArg(1)
exports.simple = func('a', 'b', 'c', 'd')
// => 'b'

func = nthArg(-2)
exports.negative = func('a', 'b', 'c', 'd')
// => 'c'
