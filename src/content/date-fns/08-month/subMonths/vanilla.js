const subMonths = (date, m) => {
  const newDate = new Date(date.getTime())
  newDate.setMonth(newDate.getMonth() - m)
  return newDate
}

// Subtract 5 months from 1 February 2015:
module.exports = subMonths(new Date(2015, 1, 1), 5)
// => Mon Sep 01 2014 00:00:00
