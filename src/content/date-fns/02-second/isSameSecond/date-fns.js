// https://date-fns.org/v3.5.0/docs/isSameSecond
import { isSameSecond } from 'date-fns'

// Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
// in the same second?
module.exports = isSameSecond(
  new Date(2014, 8, 4, 6, 30, 15),
  new Date(2014, 8, 4, 6, 30, 15, 500)
)
// => true
