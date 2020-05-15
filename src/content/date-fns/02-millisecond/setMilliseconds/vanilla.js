const setMilliseconds = (date, ms) => {
  const newDate = new Date(date.getTime())
  newDate.setMilliseconds(ms)
  return newDate
}

// Set 300 milliseconds to 1 September 2014 11:30:40.500:
module.exports = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
// => Mon Sep 01 2014 11:30:40.300
