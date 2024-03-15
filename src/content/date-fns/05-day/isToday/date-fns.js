// https://date-fns.org/v3.5.0/docs/isToday
import { isToday } from 'date-fns'

// If today is 25 September 2014, is 25 September 14:00 today?
module.exports = isToday(new Date(2014, 8, 25, 14, 0))
// => true
