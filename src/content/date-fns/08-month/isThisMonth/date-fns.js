// https://date-fns.org/v3.5.0/docs/isThisMonth
import { isThisMonth } from 'date-fns'

// If today is 25 September 2014, is 15 September 2014 in this month?
module.exports = isThisMonth(new Date(2014, 8, 15))
// => true
