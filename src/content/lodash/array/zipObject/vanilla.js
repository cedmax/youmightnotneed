const zipObject = (keys, values) =>
  keys.reduce((acc, key, idx) => {
    acc[key] = values[idx]
    return acc
  }, {})

module.exports = zipObject(['a', 'b'], [1, 2])
// => { 'a': 1, 'b': 2 }
