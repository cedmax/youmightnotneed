// https://date-fns.org/v3.5.0/docs/isBefore
import { isBefore } from 'date-fns'

exports.before = isBefore(new Date(1987, 6, 10), new Date(1989, 1, 11))
// => true

exports.equal = isBefore(new Date(1989, 6, 10), new Date(1989, 6, 10))
// => false

exports.after = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
// => false
