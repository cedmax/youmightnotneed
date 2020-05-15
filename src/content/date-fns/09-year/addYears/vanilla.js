const addYears = (date, yearsToAdd) => {
  const newDate = new Date(date.getTime())
  newDate.setFullYear(date.getFullYear() + yearsToAdd)
  return newDate
}

// Add 5 years to 1 September 2014:
module.exports = addYears(new Date(2014, 8, 1), 5)
// => Sun Sep 01 2019 00:00:00
