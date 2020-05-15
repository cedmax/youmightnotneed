const startOfSecond = date => new Date(Math.floor(date / 1000) * 1000)

// The start of a second for 1 December 2014 22:15:45.400:
module.exports = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
// => Mon Dec 01 2014 22:15:45.000
