// https://lodash.com/docs/#isNil
import { isNil } from 'lodash'

exports.nullVal = isNil(null)
// => true

exports.undefVal = isNil(undefined)
// => true

exports.nanVal = isNil(NaN)
// => false
