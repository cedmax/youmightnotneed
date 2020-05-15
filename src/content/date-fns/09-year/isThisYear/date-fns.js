// https://date-fns.org/v2.13.0/docs/isThisYear
const isThisYear = require('date-fns/isThisYear')

// If today is 25 September 2014, is 2 July 2014 in this year?
module.exports = isThisYear(new Date(2014, 6, 2))
// => true
