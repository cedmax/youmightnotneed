// https://date-fns.org/v3.5.0/docs/differenceInMilliseconds
import { differenceInMilliseconds } from 'date-fns'

// How many milliseconds are between
// 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
module.exports = differenceInMilliseconds(
  new Date(2014, 6, 2, 12, 30, 21, 700),
  new Date(2014, 6, 2, 12, 30, 20, 600)
)
// => 1100
