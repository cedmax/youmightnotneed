// https://date-fns.org/v3.5.0/docs/setMonth
import { setMonth } from 'date-fns'

// Set February to 1 September 2014:
module.exports = setMonth(new Date(2014, 8, 1), 1)
// => Sat Feb 01 2014 00:00:00
