const addMilliseconds = (date, ms) => {
  date.setMilliseconds(date.getMilliseconds() + ms)
  return date
}

// Add 750 milliseconds to 10 July 2014 12:45:30.000:
module.exports = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
// => Thu Jul 10 2014 12:45:30.750
