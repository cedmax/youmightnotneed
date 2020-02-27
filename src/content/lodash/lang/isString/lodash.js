// https://lodash.com/docs/#isString
import { isString } from 'lodash'

exports.string = isString('abc')
// => true

exports.notString = isString(1)
// => false
