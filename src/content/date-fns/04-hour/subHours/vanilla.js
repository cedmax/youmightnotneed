const subHours = (date, h) => {
  const newDate = new Date(date.getTime())
  newDate.setHours(date.getHours() - h)
  return newDate
}

// Subtract 2 hours from 11 July 2014 01:00:00:
module.exports = subHours(new Date(2014, 6, 11, 1, 0), 2)
// => Thu Jul 10 2014 23:00:00
