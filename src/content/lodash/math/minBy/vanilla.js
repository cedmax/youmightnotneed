const minBy = (arr, iteratee) => {
  const func = typeof iteratee === 'function' ? iteratee : item => item[iteratee]
  const min = Math.min(...arr.map(func))
  return arr.find(item => func(item) === min)
}

const objects = [{ n: 1 }, { n: 2 }]

exports.function = minBy(objects, o => o.n)
// => { 'n': 1 }

exports.shortHand = minBy(objects, 'n')
// => { 'n': 1 }
