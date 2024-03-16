// https://date-fns.org/v3.5.0/docs/isLastDayOfMonth
import { isLastDayOfMonth } from 'date-fns'

// Is 28 February 2014 the last day of a month?
module.exports = isLastDayOfMonth(new Date(2014, 1, 28))
// => true
