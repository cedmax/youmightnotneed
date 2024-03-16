// https://date-fns.org/v3.5.0/docs/getYear
import { getYear } from 'date-fns'

// Which year is 2 July 2014?
module.exports = getYear(new Date(2014, 6, 2))
// => 2014
