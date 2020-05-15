const roundToNearestMinutes = date =>
  new Date(Math.round(date / (1000 * 60)) * 1000 * 60)

// Round 10 July 2014 12:12:34 to nearest minute:
module.exports = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34))
// => Thu Jul 10 2014 12:13:00
