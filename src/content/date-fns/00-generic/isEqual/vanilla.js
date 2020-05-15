const isEqual = (dateA, dateB) => dateA.getTime() === dateB.getTime()

// Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
exports.notEqual = isEqual(
  new Date(2014, 6, 2, 6, 30, 45, 0),
  new Date(2014, 6, 2, 6, 30, 45, 500)
)
// => false

exports.equal = isEqual(
  new Date(2014, 6, 2, 6, 30, 45, 500),
  new Date(2014, 6, 2, 6, 30, 45, 500)
)
// => true
