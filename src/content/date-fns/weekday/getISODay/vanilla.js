const getISODay = date => (date.getDay() ? date.getDay() : 7)

// Which day of the ISO week is 26 February 2012?
module.exports = getISODay(new Date(2012, 1, 26))
// => 7
