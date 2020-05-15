const isYesterday = date => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString() === date.toLocaleDateString()
}

// If today is 25 September 2014, is 24 September yesterday?
module.exports = isYesterday(new Date(2014, 8, 24, 14, 0))
// => true
