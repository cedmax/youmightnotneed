// https://date-fns.org/v2.13.0/docs/getISODay
const getISODay = require('date-fns/getISODay')

// Which day of the ISO week is 26 February 2012?
module.exports = getISODay(new Date(2012, 1, 26))
// => 7
