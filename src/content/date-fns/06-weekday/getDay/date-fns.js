// https://date-fns.org/v3.5.0/docs/getDay
import { getDay } from 'date-fns'

// Which day of the week is 29 February 2012?
exports.randomday = getDay(new Date(2012, 1, 29))
// => 3

// Which day of the week is 26 February 2012?
exports.sunday = getDay(new Date(2012, 1, 26))
// => 0
