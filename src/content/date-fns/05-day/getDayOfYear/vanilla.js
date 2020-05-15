const DAY_IN_MS = 1000 * 60 * 60 * 24
const getDayOfYear = date =>
  (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
    Date.UTC(date.getFullYear(), 0, 0)) /
  DAY_IN_MS

// Which day of the year is 2 July 2014?
module.exports = getDayOfYear(new Date(2014, 6, 2))
// => 183
