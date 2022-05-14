// https://lodash.com/docs/#isSet
import { isSet } from 'lodash'

exports.setValue = isSet(new Set())
// => true

exports.weakSetValue = isSet(new WeakSet())
// => false
