// https://date-fns.org/v3.5.0/docs/endOfHour
import { endOfHour } from 'date-fns'

// The end of an hour for 2 September 2014 11:55:00:
module.exports = endOfHour(new Date(2014, 8, 2, 11, 55))
// => Tue Sep 02 2014 11:59:59.999
