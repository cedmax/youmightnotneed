// https://lodash.com/docs/#sortedLastIndexOf
const sortedLastIndexOf = (arr, value) => [...arr].sort().lastIndexOf(value)

module.exports = sortedLastIndexOf([4, 5, 5, 5, 6], 5)
// => 3
