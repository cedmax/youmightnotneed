// https://lodash.com/docs/#gte
import { gte } from 'lodash'

exports.greaterThan = gte(3, 1)
// => true

exports.equalTo = gte(3, 3)
// => true

exports.lessThan = gte(1, 3)
// => false
