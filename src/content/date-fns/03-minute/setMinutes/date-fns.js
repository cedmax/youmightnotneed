// https://date-fns.org/v2.13.0/docs/setMinutes
const setMinutes = require('date-fns/setMinutes')

// Set 45 minutes to 1 September 2014 11:30:40:
module.exports = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
// => Mon Sep 01 2014 11:45:40
