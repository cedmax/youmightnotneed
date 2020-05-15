const getMonth = date => date.getMonth()

// Which month is 29 February 2012?
module.exports = getMonth(new Date(2012, 1, 29))
// => 1
