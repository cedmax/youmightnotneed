// https://date-fns.org/v3.5.0/docs/differenceInHours
import { differenceInHours } from 'date-fns'

// How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
module.exports = differenceInHours(
  new Date(2014, 6, 2, 19, 0),
  new Date(2014, 6, 2, 6, 50)
)
// => 12
