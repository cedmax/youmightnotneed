const differenceInCalendarYears = (dateA, dateB) =>
  Math.abs(dateA.getFullYear() - dateB.getFullYear())

// How many calendar years are between 31 December 2013 and 11 February 2015?
module.exports = differenceInCalendarYears(
  new Date(2015, 1, 11),
  new Date(2013, 11, 31)
)
// => 2
