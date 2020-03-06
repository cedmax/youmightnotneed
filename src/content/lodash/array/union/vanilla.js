const union = (arr, ...args) => [...new Set(arr.concat(...args))]

module.exports = union([2], [1, 2], [1, 2])
// => [2, 1]
