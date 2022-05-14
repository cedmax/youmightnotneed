// Since Node.js v10+, it's available in the util library
// https://nodejs.org/api/util.html##utiltypesisweakmapvalue
//
// This implementation is a simplified version of the one found
// in the polyfill module node-util (and it doesn't support IE)
const isWeakMap = value => value.toString() === '[object WeakMap]'

exports.weakMapValue = isWeakMap(new WeakMap())
// => true

exports.weakSetValue = isWeakMap(new WeakSet())
// => false
