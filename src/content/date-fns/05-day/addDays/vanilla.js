const addDays = (date, d) => {
  date.setDate(date.getDate() + d)
  return date
}

// Add 10 days to 1 September 2014:
module.exports = addDays(new Date(2014, 8, 1), 10)
// => Thu Sep 11 2014 00:00:00
