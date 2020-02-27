const invert = obj =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [value]: key,
    }),
    {}
  )

const object = { a: 1, b: 2, c: 1 }

module.exports = invert(object)
// => { '1': 'c', '2': 'b' }
