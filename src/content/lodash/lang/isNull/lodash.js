// https://lodash.com/docs/#isNull
import { isNull } from 'lodash'

exports.nullVal = isNull(null)
// => true

exports.undefVal = isNull(undefined)
// => false
