// https://date-fns.org/v2.13.0/docs/getYear
const getYear = require('date-fns/getYear')

// Which year is 2 July 2014?
module.exports = getYear(new Date(2014, 6, 2))
// => 2014
