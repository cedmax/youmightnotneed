// https://lodash.com/docs/#gt
import { gt } from 'lodash'

exports.greaterThan = gt(3, 1)
// => true

exports.equalTo = gt(3, 3)
// => false

exports.lessThan = gt(1, 3)
// => false
