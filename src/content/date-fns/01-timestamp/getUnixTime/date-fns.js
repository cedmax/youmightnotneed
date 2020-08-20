// https://date-fns.org/v2.13.0/docs/getUnixTime
const getUnixTime = require('date-fns/getUnixTime')

// Get the timestamp of 29 February 2012 11:45:05 CET:
module.exports = getUnixTime(new Date(Date.UTC(2012, 1, 29, 11, 45, 5)))
// => 1330515905
