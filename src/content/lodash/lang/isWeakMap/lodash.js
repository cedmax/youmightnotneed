// https://lodash.com/docs/#isWeakMap
import { isWeakMap } from 'lodash'

exports.weakMapValue = isWeakMap(new WeakMap())
// => true

exports.weakSetValue = isWeakMap(new WeakSet())
// => false
