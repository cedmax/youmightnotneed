// https://lodash.com/docs/#isWeakSet
import { isWeakSet } from 'lodash'

exports.weakSetValue = isWeakSet(new WeakSet())
// => true

exports.weakMapValue = isWeakSet(new WeakMap())
// => false
