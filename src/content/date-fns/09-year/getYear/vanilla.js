const getYear = date => date.getFullYear()

// Which year is 2 July 2014?
module.exports = getYear(new Date(2014, 6, 2))
// => 2014
