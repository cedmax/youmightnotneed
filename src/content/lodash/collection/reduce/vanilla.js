exports.array = [1, 2].reduce((sum, n) => sum + n, 0)
// => 3

exports.object = Object.entries({ a: 1, b: 2, c: 1 }).reduce((result, [key, value]) => {
  ;(result[value] || (result[value] = [])).push(key)
  return result
}, {})
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
