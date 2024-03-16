// https://date-fns.org/v3.5.0/docs/isTomorrow
import { isTomorrow } from 'date-fns'

// If today is 25 September 2014, is 24 September tomorrow?
module.exports = isTomorrow(new Date(2014, 8, 26, 14, 0))
// => true
