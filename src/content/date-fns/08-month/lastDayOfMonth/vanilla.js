function lastDayOfMonth(date) {
  const dateClone = new Date(date.getTime())
  const month = dateClone.getMonth()
  dateClone.setDate(1)
  dateClone.setMonth(month + 1)
  dateClone.setDate(0)

  return dateClone
}

// Get the last day of a month.
module.exports = lastDayOfMonth(new Date(2014, 1, 25)).toDateString()
// => Fri Feb 28 2014
