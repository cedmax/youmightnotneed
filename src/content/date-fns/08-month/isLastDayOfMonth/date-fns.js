// https://date-fns.org/v2.13.0/docs/isLastDayOfMonth
const isLastDayOfMonth = require('date-fns/isLastDayOfMonth')

// Is 28 February 2014 the last day of a month?
module.exports = isLastDayOfMonth(new Date(2014, 1, 28))
// => true
