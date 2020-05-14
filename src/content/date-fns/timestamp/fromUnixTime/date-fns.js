// https://date-fns.org/v2.13.0/docs/fromUnixTime
const fromUnixTime = require('date-fns/fromUnixTime')

// Create the date 29 February 2012 11:45:05:
module.exports = fromUnixTime(1330515905)
// => Wed Feb 29 2012 11:45:05
