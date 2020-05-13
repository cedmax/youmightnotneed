// https://date-fns.org/v2.13.0/docs/isSunday
const isSunday = require('date-fns/isSunday')

// Is 21 September 2014 Sunday?
module.exports = isSunday(new Date(2014, 8, 21))
// => true
