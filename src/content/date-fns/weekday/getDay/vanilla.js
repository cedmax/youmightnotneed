const getDay = date => date.getDay()

// Which day of the week is 29 February 2012?
exports.day = getDay(new Date(2012, 1, 29))
// => 3

// Which day of the week is 26 February 2012?
exports.sunday = getDay(new Date(2012, 1, 26))
// => 0
