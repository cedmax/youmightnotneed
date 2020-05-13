// https://date-fns.org/v2.13.0/docs/getSeconds
const getSeconds = require('date-fns/getSeconds')

// Get the seconds of 29 February 2012 11:45:05.123:
module.exports = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
// => 5
