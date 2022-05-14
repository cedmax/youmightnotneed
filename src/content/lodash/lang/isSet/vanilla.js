// Since Node.js v10+, it's available in the util library
// https://nodejs.org/api/util.html##util_util_types_isset_value
//
// This implementation is a simplified version of the one found
// in the polyfill module node-util (and it doesn't support IE)
const isSet = value => value.toString() === '[object Set]'

exports.setValue = isSet(new Set())
// => true

exports.weakSetValue = isSet(new WeakSet())
// => false
