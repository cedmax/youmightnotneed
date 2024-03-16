// https://date-fns.org/v3.5.0/docs/isThisYear
import { isThisYear } from 'date-fns'

// If today is 25 September 2014, is 2 July 2014 in this year?
module.exports = isThisYear(new Date(2014, 6, 2))
// => true
