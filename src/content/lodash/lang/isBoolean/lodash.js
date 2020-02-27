// https://lodash.com/docs/#isBoolean
import { isBoolean } from 'lodash'

exports.true = isBoolean(false)
// => true

exports.false = isBoolean(null)
// => false
