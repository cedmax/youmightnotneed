// https://date-fns.org/v2.13.0/docs/isTuesday
const isTuesday = require('date-fns/isTuesday')

// Is 23 September 2014 Tuesday?
module.exports = isTuesday(new Date(2014, 8, 23))
// => true
