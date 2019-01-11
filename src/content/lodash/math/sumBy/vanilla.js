const sumBy = (arr, iteratee) => {
  const func = typeof iteratee === 'function' ? iteratee : item => item[iteratee]

  return arr.reduce((acc, item) => acc + func(item), 0)
}

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]

exports.function = sumBy(objects, o => o.n)
// => 20

// The `_.property` iteratee shorthand.
exports.shortHand = sumBy(objects, 'n')
// => 20
