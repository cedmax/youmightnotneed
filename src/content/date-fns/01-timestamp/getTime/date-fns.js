// https://date-fns.org/v2.13.0/docs/getTime
const getTime = require('date-fns/getTime')

// Get the timestamp of 29 February 2012 11:45:05.123:
module.exports = getTime(new Date(Date.UTC(2012, 1, 29, 11, 45, 5, 123)))
// => 1330515905123
