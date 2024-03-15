// https://date-fns.org/v3.5.0/docs/isThisHour
import { isThisHour } from 'date-fns'

// If now is 25 September 2014 18:30:15.500,
// is 25 September 2014 18:00:00 in this hour?
module.exports = isThisHour(new Date(2014, 8, 25, 18))
// => true
