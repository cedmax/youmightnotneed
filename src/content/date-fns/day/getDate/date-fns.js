// https://date-fns.org/v2.13.0/docs/getDate
const getDate = require('date-fns/getDate')

// Which day of the month is 29 February 2012?
module.exports = getDate(new Date(2012, 1, 29))
// => 29
