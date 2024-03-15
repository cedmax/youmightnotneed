// https://date-fns.org/v3.5.0/docs/max
import { max } from 'date-fns'

// Which of these dates is the latest?
module.exports = max([
  new Date(1989, 6, 10),
  new Date(1987, 1, 11),
  new Date(1995, 6, 2),
  new Date(1990, 0, 1),
])
// => Sun Jul 02 1995 00:00:00
