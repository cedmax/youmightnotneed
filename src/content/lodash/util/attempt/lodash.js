// https://lodash.com/docs/#attempt
import { attempt } from 'lodash'

exports.success = attempt(item => item.split(''), 'string')
// => ["s", "t", "r", "i", "n", "g"]

exports.failure = attempt(item => item.split(''), 1)
// => [TypeError: item.split is not a function]
