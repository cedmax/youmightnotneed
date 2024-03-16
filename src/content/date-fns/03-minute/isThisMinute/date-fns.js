// https://date-fns.org/v3.5.0/docs/isThisMinute
import { isThisMinute } from 'date-fns'

// If now is 25 September 2014 18:30:15.500,
// is 25 September 2014 18:30:00 in this minute?
module.exports = isThisMinute(new Date(2014, 8, 25, 18, 30))
// => true
