import { isTypedArray } from 'util/types'

exports.uint8Array = isTypedArray(new Uint8Array())
// => true

exports.float64Array = isTypedArray(new Float64Array())
// => true

exports.arrayBuffer = isTypedArray(new ArrayBuffer())
// => false
