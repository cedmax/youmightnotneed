const sumBy = (arr, func) => arr.reduce((acc, item) => acc + func(item), 0)

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]

module.exports = sumBy(objects, o => o.n)
// => 20
