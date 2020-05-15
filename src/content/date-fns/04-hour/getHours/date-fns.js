// https://date-fns.org/v2.13.0/docs/getHours
const getHours = require('date-fns/getHours')

// Get the hours of 29 February 2012 11:45:00:
module.exports = getHours(new Date(2012, 1, 29, 11, 45))
// => 11
