const differenceBy = (arr1, arr2, iteratee) => {
  if (typeof iteratee === 'string') {
    const prop = iteratee
    iteratee = item => item[prop]
  }
  return arr1.filter(c => !arr2.map(iteratee).includes(iteratee(c)))
}

exports.arrays = differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
// => [1.2]

// The `_.property` iteratee shorthand.
exports.objects = differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x')
// => [{ 'x': 2 }]
