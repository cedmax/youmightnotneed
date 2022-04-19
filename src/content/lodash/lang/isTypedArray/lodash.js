// https://lodash.com/docs/#isTypedArray
import { isTypedArray } from 'lodash'

exports.uint8Array = isTypedArray(new Uint8Array())
exports.float64Array = isTypedArray(new Float64Array())
// => true

exports.arrayBuffer = isTypedArray(new ArrayBuffer())
// => false
