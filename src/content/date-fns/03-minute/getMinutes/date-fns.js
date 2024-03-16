// https://date-fns.org/v3.5.0/docs/getMinutes
import { getMinutes } from 'date-fns'

// Get the minutes of 29 February 2012 11:45:05:
module.exports = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
// => 45
