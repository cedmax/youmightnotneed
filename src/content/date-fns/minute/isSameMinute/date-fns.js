// https://date-fns.org/v2.13.0/docs/isSameMinute
const isSameMinute = require('date-fns/isSameMinute')

// Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15
// in the same minute?
module.exports = isSameMinute(
  new Date(2014, 8, 4, 6, 30),
  new Date(2014, 8, 4, 6, 30, 15)
)
// => true
