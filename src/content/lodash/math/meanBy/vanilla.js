const meanBy = (arr, iteratee) => {
  const func = typeof iteratee === 'function' ? iteratee : item => item[iteratee]
  return arr.reduce((acc, item) => acc + func(item), 0) / arr.length
}

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]

exports.function = meanBy(objects, o => o.n)
// => 5

exports.shortHand = meanBy(objects, 'n')
// => 5
