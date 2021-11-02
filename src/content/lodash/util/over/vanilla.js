const over =
  arr =>
  (...args) =>
    arr.map(func => func(...args))

const func = over([Math.max, Math.min])

module.exports = func(1, 2, 3, 4)
// => [4, 1]
