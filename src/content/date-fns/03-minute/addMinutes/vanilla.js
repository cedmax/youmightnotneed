const addMinutes = (date, m) => {
  date.setMinutes(date.getMinutes() + m)
  return date
}

// Add 30 minutes to 10 July 2014 12:00:00:
module.exports = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
// => Thu Jul 10 2014 12:30:00
