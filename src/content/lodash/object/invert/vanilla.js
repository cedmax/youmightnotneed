const object = { a: 1, b: 2, c: 1 }

module.exports = Object.entries(object).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [value]: key,
  }),
  {}
)

// => { '1': 'c', '2': 'b' }
