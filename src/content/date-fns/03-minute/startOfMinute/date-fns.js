// https://date-fns.org/v2.13.0/docs/startOfMinute
const startOfMinute = require('date-fns/startOfMinute')

// The start of a minute for 1 December 2014 22:15:45.400:
module.exports = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
// => Mon Dec 01 2014 22:15:00
