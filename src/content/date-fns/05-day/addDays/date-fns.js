// https://date-fns.org/v3.5.0/docs/addDays
import { addDays } from 'date-fns'

// Add 10 days to 1 September 2014:
module.exports = addDays(new Date(2014, 8, 1), 10)
// => Thu Sep 11 2014 00:00:00
