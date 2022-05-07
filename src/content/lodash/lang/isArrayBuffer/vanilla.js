import { isArrayBuffer } from 'util/types'

exports.arrayBuffer = isArrayBuffer(new ArrayBuffer(2))
// => true

exports.array = isArrayBuffer(new Array(2))
// => false
