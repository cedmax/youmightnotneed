const intersection = (arr, ...args) =>
  arr.filter(item => args.every(arr => arr.includes(item)))

module.exports = intersection([2, 1], [2, 3])
// => [2]
