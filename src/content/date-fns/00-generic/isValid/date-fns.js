// https://date-fns.org/v3.5.0/docs/isValid
import { isValid } from 'date-fns'

// For the valid date:
exports.valid = isValid(new Date(2014, 1, 31))
// => true

// For the value, convertable into a date:
exports.convertible = isValid(1393804800000)
// => true

// For the invalid date:
exports.invalid = isValid(new Date(''))
// => false
