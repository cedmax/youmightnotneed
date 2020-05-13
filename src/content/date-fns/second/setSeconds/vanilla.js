const setSeconds = (date, s) => {
  const newDate = new Date(date.getTime())
  newDate.setSeconds(s)
  return newDate
}

// Set 45 seconds to 1 September 2014 11:30:40:
module.exports = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
// => Mon Sep 01 2014 11:30:45
