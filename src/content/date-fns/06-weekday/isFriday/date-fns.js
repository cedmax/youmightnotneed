// https://date-fns.org/v2.13.0/docs/isFriday
const isFriday = require('date-fns/isFriday')

// Is 26 September 2014 Friday?
module.exports = isFriday(new Date(2014, 8, 26))
// => true
