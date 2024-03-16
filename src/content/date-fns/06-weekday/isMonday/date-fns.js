// https://date-fns.org/v3.5.0/docs/isMonday
import { isMonday } from 'date-fns'

// Is 22 September 2014 Monday?
module.exports = isMonday(new Date(2014, 8, 22))
// => true
