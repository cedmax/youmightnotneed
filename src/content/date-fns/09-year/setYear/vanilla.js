const setYear = (date, year) => {
  date.setFullYear(year)
  return date
}

// Set year 2013 to 1 September 2014:
module.exports = setYear(new Date(2014, 8, 1), 2013)
// => Sun Sep 01 2013 00:00:00
