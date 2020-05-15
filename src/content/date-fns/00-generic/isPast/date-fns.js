// https://date-fns.org/v2.13.0/docs/isPast
const isPast = require('date-fns/isPast')

//  If today is 25 September 2014, Is 2 July 2014 in the past?
exports.past = isPast(new Date(2014, 6, 2))
// => true

//  If today is 25 September 2014, Is 2 July 2015 in the past?
exports.future = isPast(new Date(2015, 6, 2))
// => false
