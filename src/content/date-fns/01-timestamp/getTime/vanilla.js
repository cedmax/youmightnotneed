const getTime = date => date.getTime()

// Get the timestamp of 29 February 2012 11:45:05.123:
module.exports = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
// => 1330515905123
