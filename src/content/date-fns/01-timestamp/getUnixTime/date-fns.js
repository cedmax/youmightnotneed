// https://date-fns.org/v3.5.0/docs/getUnixTime
import { getUnixTime } from 'date-fns'

// Get the timestamp of 29 February 2012 11:45:05 CET:
module.exports = getUnixTime(new Date(Date.UTC(2012, 1, 29, 11, 45, 5)))
// => 1330515905
