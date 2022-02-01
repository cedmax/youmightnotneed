const intersectionBy = (arr, ...args) => {
  let iteratee = args.pop()
  if (typeof iteratee === 'string') {
    const prop = iteratee
    iteratee = item => item[prop]
  }

  return arr.filter(item1 =>
    args.every(arr2 => arr2.find(item2 => iteratee(item1) === iteratee(item2)))
  )
}

exports.default = intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)
// => [2.1]

// The `_.property` iteratee shorthand.
exports.property = intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')
// => [{ 'x': 1 }]
