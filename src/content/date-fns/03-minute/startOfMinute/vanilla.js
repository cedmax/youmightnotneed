const startOfMinute = date =>
  new Date(Math.floor(date / (1000 * 60)) * 1000 * 60)

// The start of a minute for 1 December 2014 22:15:45.400:
module.exports = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
// => Mon Dec 01 2014 22:15:00
