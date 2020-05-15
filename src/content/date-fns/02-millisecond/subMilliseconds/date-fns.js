// https://date-fns.org/v2.13.0/docs/subMilliseconds
const subMilliseconds = require('date-fns/subMilliseconds')

// Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
module.exports = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
// => Thu Jul 10 2014 12:45:29.250
