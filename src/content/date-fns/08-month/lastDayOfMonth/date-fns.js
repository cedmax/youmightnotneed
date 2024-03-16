// https://date-fns.org/v2.29.3/docs/lastDayOfMonth
import { lastDayOfMonth } from 'date-fns'

// Get the last day of a month.
module.exports = lastDayOfMonth(new Date(2014, 1, 25)).toDateString()
// => Fri Feb 28 2014
