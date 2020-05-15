const addHours = (date, h) => {
  const newDate = new Date(date.getTime())
  newDate.setHours(date.getHours() + h)
  return newDate
}

// Add 2 hours to 10 July 2014 23:00:00:
module.exports = addHours(new Date(2014, 6, 10, 23, 0), 2)
// => Fri Jul 11 2014 01:00:00
