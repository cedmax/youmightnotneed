// https://date-fns.org/v2.13.0/docs/setMonth
const setMonth = require('date-fns/setMonth')

// Set February to 1 September 2014:
module.exports = setMonth(new Date(2014, 8, 1), 1)
// => Sat Feb 01 2014 00:00:00
