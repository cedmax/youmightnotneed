// https://date-fns.org/v2.13.0/docs/endOfSecond
const endOfSecond = require('date-fns/endOfSecond')

// The end of a second for 1 December 2014 22:15:45.400:
module.exports = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
// => Mon Dec 01 2014 22:15:45.999
