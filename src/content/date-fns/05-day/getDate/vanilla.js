const getDate = date => date.getDate()

// Which day of the month is 29 February 2012?
module.exports = getDate(new Date(2012, 1, 29))
// => 29
