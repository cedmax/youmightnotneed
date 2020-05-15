const addYears = (date, yearsToAdd) => {
  date.setFullYear(date.getFullYear() + yearsToAdd)
  return date
}

// Add 5 years to 1 September 2014:
module.exports = addYears(new Date(2014, 8, 1), 5)
// => Sun Sep 01 2019 00:00:00
