// Since Node.js v10+, it's available in the util library
// https://nodejs.org/api/util.html#utiltypesisweaksetvalue
//
// This implementation is a simplified version of the one found
// in the polyfill module node-util (and it doesn't support IE)

const isWeakSet = value => value.toString() === '[object WeakSet]'

exports.weakSetValue = isWeakSet(new WeakSet())
// => true

exports.weakMapValue = isWeakSet(new WeakMap())
// => false
