// https://date-fns.org/v2.13.0/docs/isWeekend
const isWeekend = require('date-fns/isWeekend')

// Does 5 October 2014 fall on a weekend?
module.exports = isWeekend(new Date(2014, 9, 5))
// => true
