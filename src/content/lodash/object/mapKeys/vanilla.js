const mapKeys = (obj, mapper) =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [mapper(value, key)]: value,
    }),
    {}
  )

module.exports = mapKeys({ a: 1, b: 2 }, (value, key) => key + value)
// => { 'a1': 1, 'b2': 2 }
