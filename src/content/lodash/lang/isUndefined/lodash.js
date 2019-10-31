// https://lodash.com/docs/#isUndefined
import { isUndefined } from 'lodash'

exports.undefVal = isUndefined(undefined)
// => true

exports.nullVal = isUndefined(null)
// => false
