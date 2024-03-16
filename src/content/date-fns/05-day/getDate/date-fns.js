// https://date-fns.org/v3.5.0/docs/getDate
import { getDate } from 'date-fns'

// Which day of the month is 29 February 2012?
module.exports = getDate(new Date(2012, 1, 29))
// => 29
