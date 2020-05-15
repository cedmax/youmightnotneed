const isThisMonth = date => {
  const now = new Date()
  return date.getYear() === now.getYear() && date.getMonth() === now.getMonth()
}

// If today is 25 September 2014, is 15 September 2014 in this month?
module.exports = isThisMonth(new Date(2014, 8, 15))
// => true
