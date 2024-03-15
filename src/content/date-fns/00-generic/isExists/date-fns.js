// https://date-fns.org/v3.5.0/docs/isExists
import { isExists } from 'date-fns'

// For the valid date:
exports.valid = isExists(2018, 0, 31)
// => true

// For the invalid date:
exports.invalid = isExists(2018, 1, 31)
// => false
