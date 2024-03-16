// https://date-fns.org/v3.5.0/docs/getMonth
import { getMonth } from 'date-fns'

// Which month is 29 February 2012?
module.exports = getMonth(new Date(2012, 1, 29))
// => 1
