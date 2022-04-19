import { isWeakSet } from 'util/types'

exports.weakSetValue = isWeakSet(new WeakSet())
// => true

exports.weakMapValue = isWeakSet(new WeakMap())
// => false
