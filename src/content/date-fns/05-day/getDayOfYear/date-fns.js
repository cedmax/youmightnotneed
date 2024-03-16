// https://date-fns.org/v3.5.0/docs/getDayOfYear
import { getDayOfYear } from 'date-fns'

// Which day of the year is 2 July 2014?
module.exports = getDayOfYear(new Date(2014, 6, 2))
// => 183
