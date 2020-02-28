// Most modern JavaScript environments have `Object.fromEntries` implementation, which is a native
// replacement for `_.fromPairs`. If you are targeting the older environments,
// take a look at `fromPairs` implementation below

module.exports = Object.fromEntries([
  ['a', 1],
  ['b', 2],
])
// => { 'a': 1, 'b': 2 }
