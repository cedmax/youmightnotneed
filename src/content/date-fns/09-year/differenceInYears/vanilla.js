const YEAR_IN_MS = 1000 * 60 * 60 * 24 * 365

const differenceInYears = (dateA, dateB) =>
  Math.floor((dateA - dateB) / YEAR_IN_MS)

// How many full years are between 31 December 2013 and 11 February 2015?
module.exports = differenceInYears(
  new Date(2015, 1, 11),
  new Date(2013, 11, 31)
)
// => 1
