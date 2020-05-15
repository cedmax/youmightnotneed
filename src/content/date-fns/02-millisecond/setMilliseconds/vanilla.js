const setMilliseconds = (date, ms) => {
  date.setMilliseconds(ms)
  return date
}

// Set 300 milliseconds to 1 September 2014 11:30:40.500:
module.exports = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
// => Mon Sep 01 2014 11:30:40.300
