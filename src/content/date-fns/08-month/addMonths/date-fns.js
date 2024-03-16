// https://date-fns.org/v3.5.0/docs/addMonths
import { addMonths } from 'date-fns'

// Add 5 months to 1 September 2014:
module.exports = addMonths(new Date(2014, 8, 1), 5)
// => Sun Feb 01 2015 00:00:00
