// https://date-fns.org/v3.5.0/docs/isYesterday
import { isYesterday } from 'date-fns'

// If today is 25 September 2014, is 24 September yesterday?
module.exports = isYesterday(new Date(2014, 8, 24, 14, 0))
// => true
