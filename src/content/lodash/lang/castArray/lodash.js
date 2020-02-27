// https://lodash.com/docs/#castArray
import { castArray } from 'lodash'

exports.num = castArray(1)
// => [1]

exports.obj = castArray({ a: 1 })
// => [{ 'a': 1 }]

exports.str = castArray('abc')
// => ['abc']

exports.null = castArray(null)
// => [null]

exports.undefined = castArray(undefined)
// => [undefined]

exports.empty = castArray()
// => []

const array = [1, 2, 3]
exports.arrayEquality = castArray(array) === array
// => true
