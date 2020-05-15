// https://date-fns.org/v2.13.0/docs/isMonday
const isMonday = require('date-fns/isMonday')

// Is 22 September 2014 Monday?
module.exports = isMonday(new Date(2014, 8, 22))
// => true
