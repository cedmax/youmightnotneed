const { isSet } = require('util/types')

exports.setValue = isSet(new Set())
// => true

exports.weakSetValue = isSet(new WeakSet())
// => false
