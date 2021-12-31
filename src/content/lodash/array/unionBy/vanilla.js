// This implementation also works for
// https://youmightnotneed.com/lodash#uniqBy
// by passing only one array as an argument
// before the iteratee function
const unionBy = (arr, ...args) => {
  let iteratee = args.pop()
  if (typeof iteratee === 'string') {
    const prop = iteratee
    iteratee = item => item[prop]
  }

  return arr
    .concat(...args)
    .filter(
      (x, i, self) => i === self.findIndex(y => iteratee(x) === iteratee(y))
    )
}

exports.default = unionBy([2.1], [1.2, 2.3], Math.floor)
// => [2.1, 1.2]

// The `_.property` iteratee shorthand.
exports.property = unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')
// => [{ 'x': 1 }, { 'x': 2 }]

// _.uniqBy example
exports.uniqBy = unionBy([2.1, 1.2, 2.3], Math.floor)
// => [2.1, 1.2]
