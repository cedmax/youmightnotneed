// https://date-fns.org/v2.13.0/docs/isPast
const isPast = require('date-fns/isPast')

// Is 2 July 2014 in the past?
module.exports = isPast(new Date(2014, 6, 2))
// => true
