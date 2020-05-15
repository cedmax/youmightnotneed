const addMonths = (date, m) => {
  const newDate = new Date(date.getTime())
  newDate.setMonth(newDate.getMonth() + m)
  return newDate
}

// Add 5 months to 1 September 2014:
module.exports = addMonths(new Date(2014, 8, 1), 5)
// => Sun Feb 01 2015 00:00:00
