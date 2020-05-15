const setYear = (date, year) => {
  const newDate = new Date(date.getTime())
  newDate.setFullYear(year)
  return newDate
}

// Set year 2013 to 1 September 2014:
module.exports = setYear(new Date(2014, 8, 1), 2013)
// => Sun Sep 01 2013 00:00:00
