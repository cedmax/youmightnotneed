const isSameSecond = (dateA, dateB) =>
  Math.abs(dateA - dateB) < 1000 && dateA.getSeconds() === dateB.getSeconds()

// Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
// in the same second?
module.exports = isSameSecond(
  new Date(2014, 8, 4, 6, 30, 15, 0),
  new Date(2014, 8, 4, 6, 30, 15, 500)
)
// => true
