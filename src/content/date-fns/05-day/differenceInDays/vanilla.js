const differenceInDays = (dateA, dateB) =>
  Math.round((dateA - dateB) / (1000 * 60 * 60 * 24))

// How many full days are between
// 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
exports.year = differenceInDays(
  new Date(2012, 6, 2, 0, 0),
  new Date(2011, 6, 2, 23, 0)
)
// => 365

// How many full days are between
// 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
exports.none = differenceInDays(
  new Date(2011, 6, 3, 0, 1),
  new Date(2011, 6, 2, 23, 59)
)
// => 0

// How many full days are between
// 1 March 2020 0:00 and 1 June 2020 0:00 ?
exports.nintytwo = differenceInDays(new Date(2020, 5, 1), new Date(2020, 2, 1))
// => 92
