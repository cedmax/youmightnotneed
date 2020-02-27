// https://lodash.com/docs/#lte
import { lte } from 'lodash'

exports.default = lte(1, 3)
// => true

exports.equal = lte(3, 3)
// => true

exports.flase = lte(3, 1)
// => false
