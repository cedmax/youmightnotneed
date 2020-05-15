// https://date-fns.org/v2.13.0/docs/isExists
const isExists = require('date-fns/isExists')

// For the valid date:
exports.valid = isExists(2018, 0, 31)
// => true

// For the invalid date:
exports.invalid = isExists(2018, 1, 31)
// => false
