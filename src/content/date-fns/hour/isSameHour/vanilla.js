const HOUR_IN_MS = 1000 * 60 * 60

const isSameHour = (dateA, dateB) =>
  Math.abs(dateA.getTime() - dateB.getTime()) < HOUR_IN_MS &&
  dateA.getHours() === dateB.getHours()

// Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
module.exports = isSameHour(
  new Date(2014, 8, 4, 6, 0),
  new Date(2014, 8, 4, 6, 30)
)
// => true
