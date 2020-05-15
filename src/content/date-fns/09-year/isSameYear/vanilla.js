const isSameYear = (dateA, dateB) => dateA.getFullYear() === dateB.getFullYear()

// Are 2 September 2014 and 25 September 2014 in the same year?
module.exports = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
// => true
