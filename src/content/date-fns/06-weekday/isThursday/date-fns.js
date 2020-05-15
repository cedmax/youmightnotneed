// https://date-fns.org/v2.13.0/docs/isThursday
const isThursday = require('date-fns/isThursday')

// Is 25 September 2014 Thursday?
module.exports = isThursday(new Date(2014, 8, 25))
// => true
