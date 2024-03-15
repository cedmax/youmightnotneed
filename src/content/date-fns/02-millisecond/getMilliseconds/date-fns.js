// https://date-fns.org/v3.5.0/docs/getMilliseconds
import { getMilliseconds } from 'date-fns'

// Get the milliseconds of 29 February 2012 11:45:05.123:
module.exports = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
// => 123
