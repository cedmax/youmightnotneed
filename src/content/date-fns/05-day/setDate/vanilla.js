const setDate = (date, d) => {
  const newDate = new Date(date.getTime())
  newDate.setDate(d)
  return newDate
}

// Set the 30th day of the month to 1 September 2014:
module.exports = setDate(new Date(2014, 8, 1), 30)
// => Tue Sep 30 2014 00:00:00
