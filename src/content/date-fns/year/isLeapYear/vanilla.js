const isLeapYear = date => {
  const year = date.getFullYear()
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
}

// Is 1 September 2012 in the leap year?
module.exports = isLeapYear(new Date(2012, 8, 1))
// => true
