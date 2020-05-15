const HOUR_IN_MS = 1000 * 60 * 60

const differenceInHours = (dateA, dateB) =>
  Math.trunc((dateA - dateB) / HOUR_IN_MS)

// How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
module.exports = differenceInHours(
  new Date(2014, 6, 2, 19, 0),
  new Date(2014, 6, 2, 6, 50)
)
// => 12
