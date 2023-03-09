// https://lodash.com/docs/#isArrayLike
import { isArrayLike } from 'lodash'

exports.array = isArrayLike([1, 2, 3])
// => true

exports.arrayLike = isArrayLike(document.body.children)
// => true

exports.string = isArrayLike('abc')
// => true

exports.obj = isArrayLike({ a: 1 })
// => false

exports.funct = isArrayLike(() => {})
// => false
