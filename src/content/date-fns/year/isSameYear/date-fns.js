// https://date-fns.org/v2.13.0/docs/isSameYear
const isSameYear = require('date-fns/isSameYear')

// Are 2 September 2014 and 25 September 2014 in the same year?
module.exports = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
// => true
