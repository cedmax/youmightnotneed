// https://date-fns.org/v2.13.0/docs/isFirstDayOfMonth
const isFirstDayOfMonth = require('date-fns/isFirstDayOfMonth')

// Is 1 September 2014 the first day of a month?
module.exports = isFirstDayOfMonth(new Date(2014, 8, 1))
// => true
