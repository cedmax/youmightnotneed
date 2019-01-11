import { min } from 'lodash'

exports.min = min([4, 2, 8, 6])
// => 8

exports.undefined = min([])
// => undefined
