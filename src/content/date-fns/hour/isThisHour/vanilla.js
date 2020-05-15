const HOUR_IN_MS = 1000 * 60 * 60

const isThisHour = (dateA, dateB = new Date()) =>
  Math.abs(dateA - dateB) < HOUR_IN_MS && dateA.getHours() === dateB.getHours()

// If now is 25 September 2014 18:30:15.500,
// is 25 September 2014 18:00:00 in this hour?
module.exports = isThisHour(new Date(2014, 8, 25, 18))
// => true
