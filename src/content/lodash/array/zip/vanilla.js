const zip = (arr, ...args) =>
  arr.map((value, idx) => [value, ...args.map(arr => arr[idx])])

module.exports = zip(['a', 'b'], [1, 2], [true, false])
// => [['a', 1, true], ['b', 2, false]]
