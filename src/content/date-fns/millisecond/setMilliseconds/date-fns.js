// https://date-fns.org/v2.13.0/docs/setMilliseconds
const setMilliseconds = require('date-fns/setMilliseconds')

// Set 300 milliseconds to 1 September 2014 11:30:40.500:
module.exports = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
// => Mon Sep 01 2014 11:30:40.300
