// https://date-fns.org/v2.13.0/docs/isSameMonth
const isSameMonth = require('date-fns/isSameMonth')

// Are 2 September 2014 and 25 September 2014 in the same month?
module.exports = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
// => true
