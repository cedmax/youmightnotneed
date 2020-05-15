/* eslint-disable no-restricted-globals */
const isValid = date =>
  !isNaN((date instanceof Date ? date : new Date(date)).getTime())

// For the valid date:
exports.valid = isValid(new Date(2014, 1, 31))
// => true

// For the value, convertable into a date:
exports.convertible = isValid(1393804800000)
// => true

// For the invalid date:
exports.invalid = isValid(new Date(''))
// => false
