const zip = (arr, ...args) =>
  arr.map((value, idx) => [value, ...args.map(arr => arr[idx])])

const unzip = ([...args]) => zip(...args)

module.exports = unzip([
  ['a', 1, true],
  ['b', 2, false],
])
// => [['a', 'b'], [1, 2], [true, false]]
