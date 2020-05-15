// https://date-fns.org/v2.13.0/docs/isBefore
const isBefore = require('date-fns/isBefore')

exports.before = isBefore(new Date(1987, 6, 10), new Date(1989, 1, 11))
// => true

exports.equal = isBefore(new Date(1989, 6, 10), new Date(1989, 6, 10))
// => false

exports.after = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
// => false
