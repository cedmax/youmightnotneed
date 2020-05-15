// https://date-fns.org/v2.13.0/docs/getDayOfYear
const getDayOfYear = require('date-fns/getDayOfYear')

// Which day of the year is 2 July 2014?
module.exports = getDayOfYear(new Date(2014, 6, 2))
// => 183
