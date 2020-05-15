const isTomorrow = date => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() + 1)
  return yesterday.toLocaleDateString() === date.toLocaleDateString()
}

// If today is 25 September 2014, is 24 September tomorrow?
module.exports = isTomorrow(new Date(2014, 8, 26, 14, 0))
// => true
