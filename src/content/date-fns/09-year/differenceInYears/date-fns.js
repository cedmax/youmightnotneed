// https://date-fns.org/v2.13.0/docs/differenceInYears
const differenceInYears = require('date-fns/differenceInYears')

// How many full years are between 31 December 2013 and 11 February 2015?
module.exports = differenceInYears(
  new Date(2015, 1, 11),
  new Date(2013, 11, 31)
)
// => 1
