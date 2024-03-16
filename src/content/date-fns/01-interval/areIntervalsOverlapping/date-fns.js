// https://date-fns.org/v3.5.0/docs/areIntervalsOverlapping
import { areIntervalsOverlapping } from 'date-fns'

exports.overlapping = areIntervalsOverlapping(
  { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
  { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
)
//=> true

exports.nonOverlapping = areIntervalsOverlapping(
  { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
  { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
)
//=> false

exports.adjacent = areIntervalsOverlapping(
  { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
  { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) }
)
//=> false

exports.inclusive = areIntervalsOverlapping(
  { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
  { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) },
  { inclusive: true }
)
//=> true
