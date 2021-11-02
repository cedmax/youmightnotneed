const wrap =
  (value, func) =>
  (...args) =>
    func(value, ...args)

const sum2 = wrap(2, (a, b, c) => {
  return a + b + c
})

module.exports = sum2(1, 2)
// => 5
