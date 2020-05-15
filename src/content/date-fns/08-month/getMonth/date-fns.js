// https://date-fns.org/v2.13.0/docs/getMonth
const getMonth = require('date-fns/getMonth')

// Which month is 29 February 2012?
module.exports = getMonth(new Date(2012, 1, 29))
// => 1
