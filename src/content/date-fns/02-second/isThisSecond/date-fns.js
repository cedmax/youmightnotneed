// https://date-fns.org/v2.13.0/docs/isThisSecond
const isThisSecond = require('date-fns/isThisSecond')

// If now is 25 September 2014 18:30:15.500,
// is 25 September 2014 18:30:15.000 in this second?
module.exports = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
// => true
