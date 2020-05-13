const setMinutes = (date, m) => {
  const newDate = new Date(date.getTime())
  newDate.setMinutes(m)
  return newDate
}

// Set 45 minutes to 1 September 2014 11:30:40:
module.exports = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
// => Mon Sep 01 2014 11:45:40
