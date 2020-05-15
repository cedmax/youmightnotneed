// https://date-fns.org/v2.13.0/docs/isSameSecond
const isSameSecond = require('date-fns/isSameSecond')

// Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
// in the same second?
module.exports = isSameSecond(
  new Date(2014, 8, 4, 6, 30, 15),
  new Date(2014, 8, 4, 6, 30, 15, 500)
)
// => true
