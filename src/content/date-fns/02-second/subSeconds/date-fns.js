// https://date-fns.org/v3.5.0/docs/subSeconds
import { subSeconds } from 'date-fns'

// Subtract 30 seconds from 10 July 2014 12:45:00:
module.exports = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
// => Thu Jul 10 2014 12:44:30
