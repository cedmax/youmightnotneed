// https://date-fns.org/v3.5.0/docs/isThisSecond
import { isThisSecond } from 'date-fns'

// If now is 25 September 2014 18:30:15.500,
// is 25 September 2014 18:30:15.000 in this second?
module.exports = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
// => true
