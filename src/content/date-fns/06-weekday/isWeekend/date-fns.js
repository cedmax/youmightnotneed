// https://date-fns.org/v3.5.0/docs/isWeekend
import { isWeekend } from 'date-fns'

// Does 5 October 2014 fall on a weekend?
module.exports = isWeekend(new Date(2014, 9, 5))
// => true
