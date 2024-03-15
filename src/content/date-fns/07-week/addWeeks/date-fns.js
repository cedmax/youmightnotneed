// https://date-fns.org/v3.5.0/docs/addWeeks
import { addWeeks } from 'date-fns'

// Add 4 weeks to 1 September 2014:
module.exports = addWeeks(new Date(2014, 8, 1), 4)
// => Mon Sep 29 2014 00:00:00
