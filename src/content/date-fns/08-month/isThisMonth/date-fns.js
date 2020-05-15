// https://date-fns.org/v2.13.0/docs/isThisMonth
const isThisMonth = require('date-fns/isThisMonth')

// If today is 25 September 2014, is 15 September 2014 in this month?
module.exports = isThisMonth(new Date(2014, 8, 15))
// => true
