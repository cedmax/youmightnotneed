// https://date-fns.org/v3.5.0/docs/compareDesc
import { compareDesc } from 'date-fns'

// Compare 11 February 1987 and 11 February 1987:
exports.equal = compareDesc(new Date(1987, 1, 11), new Date(1987, 1, 11))
// => 0

// Compare 11 February 1987 and 10 July 1989:
exports.compare = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))
// => -1

// Sort the array of dates in reverse chronological order:
exports.sort = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
].sort(compareDesc)
// => [
//   Sun Jul 02 1995 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Wed Feb 11 1987 00:00:00
// ]
