const sortedIndexOf = (arr, value) => [...arr].sort().indexOf(value)

module.exports = sortedIndexOf([4, 5, 5, 5, 6], 5)
// => 1
