// https://date-fns.org/v2.13.0/docs/getDay
const getDay = require('date-fns/getDay')

// Which day of the week is 29 February 2012?
module.exports = getDay(new Date(2012, 1, 29))
// => 3
