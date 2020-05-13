// https://date-fns.org/v2.13.0/docs/isLeapYear
const isLeapYear = require('date-fns/isLeapYear')

// Is 1 September 2012 in the leap year?
module.exports = isLeapYear(new Date(2012, 8, 1))
// => true
