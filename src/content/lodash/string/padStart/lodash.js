// https://lodash.com/docs/#padStart
import { padStart } from 'lodash'

exports.defaultPadding = padStart('abc', 6)
// => '   abc'

exports.customPadding = padStart('abc', 6, '_-')
// => '_-_abc'

exports.noExtraPadding = padStart('abc', 3)
// => 'abc'
