// https://date-fns.org/v2.13.0/docs/addMilliseconds
const addMilliseconds = require('date-fns/addMilliseconds')

// Add 750 milliseconds to 10 July 2014 12:45:30.000:
module.exports = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
// => Thu Jul 10 2014 12:45:30.750
