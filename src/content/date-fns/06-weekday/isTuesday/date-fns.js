// https://date-fns.org/v3.5.0/docs/isTuesday
import { isTuesday } from 'date-fns'

// Is 23 September 2014 Tuesday?
module.exports = isTuesday(new Date(2014, 8, 23))
// => true
