function isLargerThanTen (element, index, array) {
  return element >= 10
}

var array = [10, 20, 30]
_.every(array, isLargerThanTen)
// => true