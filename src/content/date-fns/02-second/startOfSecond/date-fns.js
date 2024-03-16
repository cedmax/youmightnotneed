// https://date-fns.org/v3.5.0/docs/startOfSecond
import { startOfSecond } from 'date-fns'

// The start of a second for 1 December 2014 22:15:45.400:
module.exports = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
// => Mon Dec 01 2014 22:15:45.000
