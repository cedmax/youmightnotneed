// https://date-fns.org/v3.5.0/docs/subWeeks
import { subWeeks } from 'date-fns'

// Subtract 4 weeks from 1 September 2014:
module.exports = subWeeks(new Date(2014, 8, 1), 4)
// => Mon Aug 04 2014 00:00:00
