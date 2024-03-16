// https://date-fns.org/v3.5.0/docs/isWithinInterval
import { isWithinInterval } from 'date-fns'

exports.in = isWithinInterval(new Date(2014, 0, 3), {
  start: new Date(2014, 0, 1),
  end: new Date(2014, 0, 7),
})
//=> true

exports.out = isWithinInterval(new Date(2014, 0, 10), {
  start: new Date(2014, 0, 1),
  end: new Date(2014, 0, 7),
})
//=> false

const date = new Date()

exports.start = isWithinInterval(date, {
  start: date,
  end: new Date(2500, 0, 1),
})
// => true

exports.end = isWithinInterval(date, {
  start: new Date(2020, 0, 1),
  end: date,
})
// => true
