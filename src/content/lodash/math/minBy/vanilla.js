const minBy = (arr, func) => {
  const min = Math.min(...arr.map(func))
  return arr.find(item => func(item) === min)
}

const objects = [{ n: 1 }, { n: 2 }]

module.exports = minBy(objects, o => o.n)
// => { 'n': 1 }
