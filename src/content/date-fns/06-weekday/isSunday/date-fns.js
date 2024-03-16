// https://date-fns.org/v3.5.0/docs/isSunday
import { isSunday } from 'date-fns'

// Is 21 September 2014 Sunday?
module.exports = isSunday(new Date(2014, 8, 21))
// => true
