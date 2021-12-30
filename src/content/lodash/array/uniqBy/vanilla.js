const uniqBy = (arr, iteratee) => {
  if (typeof iteratee === 'string') {
    const prop = iteratee
    iteratee = item => item[prop]
  }

  return arr.filter(
    (x, i, self) => i === self.findIndex(y => iteratee(x) === iteratee(y))
  )
}

exports.default = uniqBy([2.1, 1.2, 2.3], Math.floor)
// => [2.1, 1.2]

// The `_.property` iteratee shorthand.
exports.property = uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x')
// => [{ 'x': 1 }, { 'x': 2 }]
