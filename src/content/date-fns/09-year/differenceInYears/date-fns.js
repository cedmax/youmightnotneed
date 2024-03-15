// https://date-fns.org/v3.5.0/docs/differenceInYears
import { differenceInYears } from 'date-fns'

// How many full years are between 31 December 2013 and 11 February 2015?
module.exports = differenceInYears(
  new Date(2015, 1, 11),
  new Date(2013, 11, 31)
)
// => 1
