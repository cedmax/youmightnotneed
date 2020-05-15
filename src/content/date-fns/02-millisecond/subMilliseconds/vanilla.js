const subMilliseconds = (date, ms) => {
  date.setMilliseconds(date.getMilliseconds() - ms)
  return date
}

// Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
module.exports = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
// => Thu Jul 10 2014 12:45:29.250
