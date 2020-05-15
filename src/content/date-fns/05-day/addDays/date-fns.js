// https://date-fns.org/v2.13.0/docs/addDays
const addDays = require('date-fns/addDays')

// Add 10 days to 1 September 2014:
module.exports = addDays(new Date(2014, 8, 1), 10)
// => Thu Sep 11 2014 00:00:00
