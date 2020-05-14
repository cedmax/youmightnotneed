const isLeapYear = date => {
  const year = date.getFullYear()
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
}

// Is 1 September 2012 in the leap year?
exports.leap = isLeapYear(new Date(2012, 8, 1))
// => true

// Is 1 September 2013 in the leap year?
exports.notLeap = isLeapYear(new Date(2013, 8, 1))
// => false
