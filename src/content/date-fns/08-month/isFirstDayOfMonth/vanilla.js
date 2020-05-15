const isFirstDayOfMonth = date => date.getDate() === 1

// Is 1 September 2014 the first day of a month?
module.exports = isFirstDayOfMonth(new Date(2014, 8, 1))
// => true
