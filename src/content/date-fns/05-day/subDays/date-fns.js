// https://date-fns.org/v2.13.0/docs/subDays
const subDays = require('date-fns/subDays')

// Subtract 10 days from 1 September 2014:
module.exports = subDays(new Date(2014, 8, 1), 10)
// => Fri Aug 22 2014 00:00:00
