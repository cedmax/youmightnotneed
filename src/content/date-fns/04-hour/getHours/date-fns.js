// https://date-fns.org/v3.5.0/docs/getHours
import { getHours } from 'date-fns'

// Get the hours of 29 February 2012 11:45:00:
module.exports = getHours(new Date(2012, 1, 29, 11, 45))
// => 11
