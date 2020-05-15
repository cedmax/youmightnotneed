const isToday = date => {
  const yesterday = new Date()
  return yesterday.toLocaleDateString() === date.toLocaleDateString()
}

// If today is 25 September 2014, is 25 September 14:00 today?
module.exports = isToday(new Date(2014, 8, 25, 14, 0))
// => true
