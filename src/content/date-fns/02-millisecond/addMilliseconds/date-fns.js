// https://date-fns.org/v3.5.0/docs/addMilliseconds
import { addMilliseconds } from 'date-fns'

// Add 750 milliseconds to 10 July 2014 12:45:30.000:
module.exports = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
// => Thu Jul 10 2014 12:45:30.750
