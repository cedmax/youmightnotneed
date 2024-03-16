// https://date-fns.org/v3.5.0/docs/subMinutes
import { subMinutes } from 'date-fns'

// Subtract 30 minutes from 10 July 2014 12:00:00:
module.exports = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
// => Thu Jul 10 2014 11:30:00
