const HOUR_IN_MS = 1000 * 60 * 60

const startOfHour = date => new Date(Math.floor(date / HOUR_IN_MS) * HOUR_IN_MS)

// The start of an hour for 2 September 2014 11:55:00:
module.exports = startOfHour(new Date(2014, 8, 2, 11, 55))
// => Tue Sep 02 2014 11:00:00
