const subMinutes = (date, m) => {
  const newDate = new Date(date.getTime())
  newDate.setMinutes(date.getMinutes() - m)
  return newDate
}

// Subtract 30 minutes from 10 July 2014 12:00:00:
module.exports = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
// => Thu Jul 10 2014 11:30:00
