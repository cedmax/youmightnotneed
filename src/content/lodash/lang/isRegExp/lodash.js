// https://lodash.com/docs/#isRegExp
import { isRegExp } from 'lodash'

exports.regex = isRegExp(/abc/)
// => true

exports.notRegex = isRegExp('/abc/')
// => false
