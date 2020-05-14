// https://date-fns.org/v2.13.0/docs/getISODay
const getISODay = require('date-fns/getISODay')

// Which day of the week is 29 February 2012?
exports.day = getISODay(new Date(2012, 1, 29))
// => 3

// Which day of the week is 26 February 2012?
exports.sunday = getISODay(new Date(2012, 1, 26))
// => 7
