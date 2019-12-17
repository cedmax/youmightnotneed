// https://lodash.com/docs/#padEnd
import { padEnd } from 'lodash'

exports.defaultPadding = padEnd('abc', 6)
// => 'abc   '

exports.customPadding = padEnd('abc', 6, '_-')
// => 'abc_-_'

exports.noExtraPadding = padEnd('abc', 3)
// => 'abc'
