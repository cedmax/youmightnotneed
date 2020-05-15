// https://date-fns.org/v2.13.0/docs/setHours
const setHours = require('date-fns/setHours')

// Set 4 hours to 1 September 2014 11:30:00:
module.exports = setHours(new Date(2014, 8, 1, 11, 30), 4)
// => Mon Sep 01 2014 04:30:00
