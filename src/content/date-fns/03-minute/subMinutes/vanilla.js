const subMinutes = (date, m) => {
  date.setMinutes(date.getMinutes() - m)
  return date
}

// Subtract 30 minutes from 10 July 2014 12:00:00:
module.exports = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
// => Thu Jul 10 2014 11:30:00
