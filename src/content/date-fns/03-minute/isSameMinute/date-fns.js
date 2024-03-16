// https://date-fns.org/v3.5.0/docs/isSameMinute
import { isSameMinute } from 'date-fns'

// Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15
// in the same minute?
module.exports = isSameMinute(
  new Date(2014, 8, 4, 6, 30),
  new Date(2014, 8, 4, 6, 30, 15)
)
// => true
