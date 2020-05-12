// https://date-fns.org/v2.13.0/docs/isAfter
const isAfter = require('date-fns/isAfter')

exports.before = isAfter(new Date(1987, 6, 10), new Date(1989, 1, 11))
// => true

exports.equal = isAfter(new Date(1989, 6, 10), new Date(1989, 6, 10))
// => false

exports.after = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
// => true
