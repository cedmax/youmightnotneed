const maxBy = (arr, iteratee) => {
  const func = typeof iteratee === 'function' ? iteratee : item => item[iteratee]
  const max = Math.max(...arr.map(func))
  return arr.find(item => func(item) === max)
}

const objects = [{ n: 1 }, { n: 2 }]

exports.function = maxBy(objects, o => o.n)
// => { 'n': 2 }

exports.shortHand = maxBy(objects, 'n')
// => { 'n': 2 }
