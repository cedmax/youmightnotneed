// https://date-fns.org/v2.13.0/docs/isSaturday
const isSaturday = require('date-fns/isSaturday')

// Is 27 September 2014 Saturday?
module.exports = isSaturday(new Date(2014, 8, 27))
// => true
