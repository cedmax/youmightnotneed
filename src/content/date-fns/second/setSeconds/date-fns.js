// https://date-fns.org/v2.13.0/docs/setSeconds
const setSeconds = require('date-fns/setSeconds')

// Set 45 seconds to 1 September 2014 11:30:40:
module.exports = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
// => Mon Sep 01 2014 11:30:45
