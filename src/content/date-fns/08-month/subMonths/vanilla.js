const subMonths = (date, m) => {
  date.setMonth(date.getMonth() - m)
  return date
}

// Subtract 5 months from 1 February 2015:
module.exports = subMonths(new Date(2015, 1, 1), 5)
// => Mon Sep 01 2014 00:00:00
