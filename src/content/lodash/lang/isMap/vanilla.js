// Since Node.js v10+, it's available in the util library
// https://nodejs.org/api/util.html##util_util_types_ismap_value
//
// This implementation is a simplified version of the one found
// in the polyfill module node-util (and it doesn't support IE)
const isMap = value => value.toString() === '[object Map]'

exports.mapValue = isMap(new Map())
// => true

exports.weakMapValue = isMap(new WeakMap())
// => false
