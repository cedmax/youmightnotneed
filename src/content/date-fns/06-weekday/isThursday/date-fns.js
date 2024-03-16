// https://date-fns.org/v3.5.0/docs/isThursday
import { isThursday } from 'date-fns'

// Is 25 September 2014 Thursday?
module.exports = isThursday(new Date(2014, 8, 25))
// => true
