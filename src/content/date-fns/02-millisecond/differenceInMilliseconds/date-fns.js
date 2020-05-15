// https://date-fns.org/v2.13.0/docs/differenceInMilliseconds
const differenceInMilliseconds = require('date-fns/differenceInMilliseconds')

// How many milliseconds are between
// 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
module.exports = differenceInMilliseconds(
  new Date(2014, 6, 2, 12, 30, 21, 700),
  new Date(2014, 6, 2, 12, 30, 20, 600)
)
// => 1100
