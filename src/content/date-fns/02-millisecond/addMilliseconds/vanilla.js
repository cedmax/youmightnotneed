const addMilliseconds = (date, ms) => {
  const newDate = new Date(date.getTime())
  newDate.setMilliseconds(date.getMilliseconds() + ms)
  return newDate
}

// Add 750 milliseconds to 10 July 2014 12:45:30.000:
module.exports = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
// => Thu Jul 10 2014 12:45:30.750
