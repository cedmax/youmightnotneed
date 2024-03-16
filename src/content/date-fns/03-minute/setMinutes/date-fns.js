// https://date-fns.org/v3.5.0/docs/setMinutes
import { setMinutes } from 'date-fns'

// Set 45 minutes to 1 September 2014 11:30:40:
module.exports = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
// => Mon Sep 01 2014 11:45:40
