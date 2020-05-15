// https://date-fns.org/v2.13.0/docs/differenceInSeconds
const differenceInSeconds = require('date-fns/differenceInSeconds')

// How many seconds are between
// 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
module.exports = differenceInSeconds(
  new Date(2014, 6, 2, 12, 30, 20, 0),
  new Date(2014, 6, 2, 12, 30, 7, 999)
)
// => 12
