// https://date-fns.org/v3.5.0/docs/isFirstDayOfMonth
import { isFirstDayOfMonth } from 'date-fns'

// Is 1 September 2014 the first day of a month?
module.exports = isFirstDayOfMonth(new Date(2014, 8, 1))
// => true
