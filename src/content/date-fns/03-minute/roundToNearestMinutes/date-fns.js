// https://date-fns.org/v3.5.0/docs/roundToNearestMinutes
import { roundToNearestMinutes } from 'date-fns'

// Round 10 July 2014 12:12:34 to nearest minute:
module.exports = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34))
// => Thu Jul 10 2014 12:13:00
