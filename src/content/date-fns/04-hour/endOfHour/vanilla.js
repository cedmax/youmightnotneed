const HOUR_IN_MS = 1000 * 60 * 60

const endOfHour = date =>
  new Date(Math.ceil(date.getTime() / HOUR_IN_MS) * HOUR_IN_MS - 1)

// The end of an hour for 2 September 2014 11:55:00:
module.exports = endOfHour(new Date(2014, 8, 2, 11, 55))
// => Tue Sep 02 2014 11:59:59.999
