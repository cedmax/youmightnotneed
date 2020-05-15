// https://date-fns.org/v2.13.0/docs/isSameHour
const isSameHour = require('date-fns/isSameHour')

// Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
module.exports = isSameHour(
  new Date(2014, 8, 4, 6, 0),
  new Date(2014, 8, 4, 6, 30)
)
// => true
