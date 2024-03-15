// https://date-fns.org/v3.5.0/docs/differenceInMinutes
import { differenceInMinutes } from 'date-fns'

// How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
exports.positive = differenceInMinutes(
  new Date(2014, 6, 2, 12, 20, 0),
  new Date(2014, 6, 2, 12, 7, 59)
)
// => 12

// How many minutes are from 10:01:59 to 10:00:00
exports.negative = differenceInMinutes(
  new Date(2000, 0, 1, 10, 0, 0),
  new Date(2000, 0, 1, 10, 1, 59)
)
// => -1
