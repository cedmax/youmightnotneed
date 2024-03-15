// https://date-fns.org/v3.5.0/docs/endOfSecond
import { endOfSecond } from 'date-fns'

// The end of a second for 1 December 2014 22:15:45.400:
module.exports = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
// => Mon Dec 01 2014 22:15:45.999
