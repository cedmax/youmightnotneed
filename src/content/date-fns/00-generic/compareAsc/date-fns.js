// https://date-fns.org/v2.13.0/docs/compareAsc
const compareAsc = require('date-fns/compareAsc')

// Compare 11 February 1987 and 11 February 1987:
exports.equal = compareAsc(new Date(1987, 1, 11), new Date(1987, 1, 11))
// => 0

// Compare 11 February 1987 and 10 July 1989:
exports.compare = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
// => -1

// Sort the array of dates:
exports.sort = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
].sort(compareAsc)
// => [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
