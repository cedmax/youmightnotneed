// https://date-fns.org/v2.13.0/docs/isToday
const isToday = require('date-fns/isToday')

// If today is 25 September 2014, is 25 September 14:00 today?
module.exports = isToday(new Date(2014, 8, 25, 14, 0))
// => true
