// https://date-fns.org/v2.13.0/docs/isTomorrow
const isTomorrow = require('date-fns/isTomorrow')

// If today is 25 September 2014, is 24 September tomorrow?
module.exports = isTomorrow(new Date(2014, 8, 26, 14, 0))
// => true
