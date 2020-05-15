// https://date-fns.org/v2.13.0/docs/closestTo
const closestTo = require('date-fns/closestTo')

// Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
const dateToCompare = new Date(2015, 8, 6)
module.exports = closestTo(dateToCompare, [
  new Date(2000, 0, 1),
  new Date(2030, 0, 1),
])
// => Tue Jan 01 2030 00:00:00
