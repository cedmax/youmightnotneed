// https://lodash.com/docs/#isObject
import { isObject } from 'lodash'

exports.object = isObject({})
// => true

exports.array = isObject([1, 2, 3])
// => true

exports.funct = isObject(() => {})
// => true

exports.null = isObject(null)
// => false
