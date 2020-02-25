// https://lodash.com/docs/#nth
import { nth } from 'lodash'

const array = ['a', 'b', 'c', 'd']

exports.simple = nth(array, 1)
// => 'b'

exports.negative = nth(array, -2)
// => 'c';
