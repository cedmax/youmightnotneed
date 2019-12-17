// Most modern JavaScript environments have `Object.fromEntries` implementation, which is a native
// replacement for `_.fromPairs`. If you are targeting the older environments,
// take a look at `fromPairs` implementation below

exports.modern = Object.fromEntries([['a', 1], ['b', 2]])
// => { 'a': 1, 'b': 2 }

const fromPairs = pairs =>
  pairs.reduce((cache, pair) => {
    cache[pair[0]] = pair[1]
    return cache
  }, {})

exports.legacy = fromPairs([['a', 1], ['b', 2]])
// => { 'a': 1, 'b': 2 }
