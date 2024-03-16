// https://date-fns.org/v3.5.0/docs/endOfMinute
import { endOfMinute } from 'date-fns'

// The end of a minute for 1 December 2014 22:15:45.400:
module.exports = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
// => Mon Dec 01 2014 22:15:59.999
