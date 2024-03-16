// https://date-fns.org/v3.5.0/docs/isWednesday
import { isWednesday } from 'date-fns'

// Is 24 September 2014 Wednesday?
module.exports = isWednesday(new Date(2014, 8, 24))
// => true
