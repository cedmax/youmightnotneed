// https://date-fns.org/v2.13.0/docs/differenceInCalendarYears
const differenceInCalendarYears = require('date-fns/differenceInCalendarYears')

// How many calendar years are between 31 December 2013 and 11 February 2015?
module.exports = differenceInCalendarYears(
  new Date(2015, 1, 11),
  new Date(2013, 11, 31)
)
// => 2
