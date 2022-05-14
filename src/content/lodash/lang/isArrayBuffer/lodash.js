// https://lodash.com/docs/#isArrayBuffer
import { isArrayBuffer } from 'lodash'

exports.arrayBuffer = isArrayBuffer(new ArrayBuffer(2))
// => true

exports.array = isArrayBuffer(new Array(2))
// => false
