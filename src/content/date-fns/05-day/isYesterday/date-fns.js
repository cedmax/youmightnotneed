// https://date-fns.org/v2.13.0/docs/isYesterday
const isYesterday = require('date-fns/isYesterday')

// If today is 25 September 2014, is 24 September yesterday?
module.exports = isYesterday(new Date(2014, 8, 24, 14, 0))
// => true
