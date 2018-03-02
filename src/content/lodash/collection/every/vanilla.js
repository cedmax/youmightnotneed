function isLargerThanTen (element) {
  return element >= 10
}

module.exports = [10, 20, 30].every(isLargerThanTen)
// => true
