// https://date-fns.org/v3.5.0/docs/isFriday
import { isFriday } from 'date-fns'

// Is 26 September 2014 Friday?
module.exports = isFriday(new Date(2014, 8, 26))
// => true
