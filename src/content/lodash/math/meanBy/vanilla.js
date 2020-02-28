const meanBy = (arr, func) => arr.reduce((acc, item) => acc + func(item), 0) / arr.length

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]

module.exports = meanBy(objects, o => o.n)
// => 5
