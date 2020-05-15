// https://date-fns.org/v2.13.0/docs/isWednesday
const isWednesday = require('date-fns/isWednesday')

// Is 24 September 2014 Wednesday?
module.exports = isWednesday(new Date(2014, 8, 24))
// => true
