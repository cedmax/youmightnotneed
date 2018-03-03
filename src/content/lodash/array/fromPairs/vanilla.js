const fromPairs = pairs => pairs.reduce((cache, pair) => {
  cache[pair[0]] = pair[1]
  return cache
}, {})


module.exports = fromPairs([['a', 1], ['b', 2]])
// => { 'a': 1, 'b': 2 }
