// https://lodash.com/docs/#isMap
import { isMap } from 'lodash'

exports.mapValue = isMap(new Map())
// => true

exports.weakMapValue = isMap(new WeakMap())
// => false
