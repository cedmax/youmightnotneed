// https://date-fns.org/v2.13.0/docs/closestIndexTo
const closestIndexTo = require('date-fns/closestIndexTo')

// Which date is closer to 6 September 2015?
const dateToCompare = new Date(2015, 8, 6)
const datesArray = [
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
]

module.exports = closestIndexTo(dateToCompare, datesArray)
// => 1
