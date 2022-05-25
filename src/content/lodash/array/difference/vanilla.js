const difference = (arr1, arr2) => arr1.filter(x => !arr2.includes(x))

module.exports = difference([2, 1], [3, 2])
// => [1]
