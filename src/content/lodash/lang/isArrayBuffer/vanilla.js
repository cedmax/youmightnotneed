// Since Node.js v10+, it's available in the util library
// https://nodejs.org/api/util.html##utiltypesisarraybuffervalue
//
// This implementation is a simplified version of the one found
// in the polyfill module node-util (and it doesn't support IE)
const isArrayBuffer = value => value.toString() === '[object ArrayBuffer]'

exports.arrayBuffer = isArrayBuffer(new ArrayBuffer(2))
// => true

exports.array = isArrayBuffer(new Array(2))
// => false
