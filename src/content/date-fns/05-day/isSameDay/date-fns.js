// https://date-fns.org/v3.5.0/docs/isSameDay
import { isSameDay } from 'date-fns'

// Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
module.exports = isSameDay(
  new Date(2014, 8, 4, 6, 0),
  new Date(2014, 8, 4, 18, 0)
)
// => true
