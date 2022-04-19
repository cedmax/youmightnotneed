const { isWeakMap } = require('util/types')

exports.weakMapValue = isWeakMap(new WeakMap())
// => true

exports.weakSetValue = isWeakMap(new WeakSet())
// => false
