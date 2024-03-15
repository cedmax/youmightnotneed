// https://date-fns.org/v3.5.0/docs/isSaturday
import { isSaturday } from 'date-fns'

// Is 27 September 2014 Saturday?
module.exports = isSaturday(new Date(2014, 8, 27))
// => true
