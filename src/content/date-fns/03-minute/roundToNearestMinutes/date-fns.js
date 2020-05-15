// https://date-fns.org/v2.13.0/docs/roundToNearestMinutes
const roundToNearestMinutes = require('date-fns/roundToNearestMinutes')

// Round 10 July 2014 12:12:34 to nearest minute:
module.exports = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34))
// => Thu Jul 10 2014 12:13:00
