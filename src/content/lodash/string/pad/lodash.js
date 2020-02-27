// https://lodash.com/docs/#pad
import { pad } from 'lodash'

exports.defaultPadding = pad('abc', 8)
// // => '  abc   '
//
exports.customPadding = pad('abc', 8, '_-')
// // => '_-abc_-_'
//
exports.noExtraPadding = pad('abc', 3)
// // => 'abc'
