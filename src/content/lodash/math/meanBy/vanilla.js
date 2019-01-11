const minBy = (arr, iteratee) => {
  const func = typeof iteratee === 'function' ? iteratee : item => item[iteratee]
  return arr.reduce((acc, item) => acc + func(item), 0) / arr.length
}

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]

exports.function = minBy(objects, o => o.n)
// => 5

exports.shortHand = minBy(objects, 'n')
// => 5
