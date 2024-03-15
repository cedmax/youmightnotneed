// https://date-fns.org/v3.5.0/docs/differenceInCalendarYears
import { differenceInCalendarYears } from 'date-fns'

// How many calendar years are between 31 December 2013 and 11 February 2015?
module.exports = differenceInCalendarYears(
  new Date(2015, 1, 11),
  new Date(2013, 11, 31)
)
// => 2
