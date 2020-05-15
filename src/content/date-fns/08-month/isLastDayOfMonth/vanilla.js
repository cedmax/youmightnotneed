const isLastDayOfMonth = date => {
  const dateClone = new Date(date.getTime())
  dateClone.setDate(date.getDate() + 1)
  return date.getMonth() === dateClone.getMonth() - 1
}

// Is 28 February 2014 the last day of a month?
module.exports = isLastDayOfMonth(new Date(2014, 1, 28))
// => true
