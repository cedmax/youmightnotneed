// https://date-fns.org/v3.5.0/docs/startOfHour
import { startOfHour } from 'date-fns'

// The start of an hour for 2 September 2014 11:55:00:
module.exports = startOfHour(new Date(2014, 8, 2, 11, 55))
// => Tue Sep 02 2014 11:00:00
