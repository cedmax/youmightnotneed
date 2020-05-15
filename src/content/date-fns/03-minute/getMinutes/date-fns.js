// https://date-fns.org/v2.13.0/docs/getMinutes
const getMinutes = require('date-fns/getMinutes')

// Get the minutes of 29 February 2012 11:45:05:
module.exports = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
// => 45
