// https://date-fns.org/v2.13.0/docs/isFuture
const isFuture = require('date-fns/isFuture')

// Is 31 December 2214 in the future?
module.exports = isFuture(new Date(2214, 11, 31))
// => true
