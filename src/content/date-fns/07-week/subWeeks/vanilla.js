const subWeeks = (date, w) => {
  const newDate = new Date(date.getTime())
  newDate.setDate(date.getDate() - w * 7)
  return newDate
}

// Subtract 4 weeks from 1 September 2014:
module.exports = subWeeks(new Date(2014, 8, 1), 4)
// => Mon Aug 04 2014 00:00:00
