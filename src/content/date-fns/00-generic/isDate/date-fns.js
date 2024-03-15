// https://date-fns.org/v3.5.0/docs/isDate
import { isDate } from 'date-fns'

// For a valid date:
exports.valid = isDate(new Date())
// => true

// For an invalid date:
exports.invalid = isDate(new Date(NaN))
// => true

// For some value:
exports.string = isDate('2014-02-31')
// => false

// For an object:
exports.object = isDate({})
// => false
