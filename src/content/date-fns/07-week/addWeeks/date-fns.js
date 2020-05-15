// https://date-fns.org/v2.13.0/docs/addWeeks
const addWeeks = require('date-fns/addWeeks')

// Add 4 weeks to 1 September 2014:
module.exports = addWeeks(new Date(2014, 8, 1), 4)
// => Mon Sep 29 2014 00:00:00
