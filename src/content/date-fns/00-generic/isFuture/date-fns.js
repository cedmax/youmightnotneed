// https://date-fns.org/v3.5.0/docs/isFuture
import { isFuture } from 'date-fns'

// If today is 25 September 2014, Is 31 December 2014 in the future?
exports.future = isFuture(new Date(2014, 11, 31))
// => true

// If today is 25 September 2014, Is 31 December 1980 in the future?
exports.past = isFuture(new Date(1980, 11, 31))
// => false
