// https://date-fns.org/v2.13.0/docs/isSameDay
const isSameDay = require('date-fns/isSameDay')

// Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
module.exports = isSameDay(
  new Date(2014, 8, 4, 6, 0),
  new Date(2014, 8, 4, 18, 0)
)
// => true
