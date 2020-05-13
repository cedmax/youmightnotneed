const getDay = date => date.getDay()

// Which day of the week is 29 February 2012?
module.exports = getDay(new Date(2012, 1, 29))
// => 3
