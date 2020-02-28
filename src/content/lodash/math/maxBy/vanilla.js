const maxBy = (arr, func) => {
  const max = Math.max(...arr.map(func))
  return arr.find(item => func(item) === max)
}

const objects = [{ n: 1 }, { n: 2 }]

module.exports = maxBy(objects, o => o.n)
// => { 'n': 2 }
