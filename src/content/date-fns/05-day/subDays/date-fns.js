// https://date-fns.org/v3.5.0/docs/subDays
import { subDays } from 'date-fns'

// Subtract 10 days from 1 September 2014:
module.exports = subDays(new Date(2014, 8, 1), 10)
// => Fri Aug 22 2014 00:00:00
