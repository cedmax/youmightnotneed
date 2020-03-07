const sortedUniq = arr => [...new Set(arr)].sort()

module.exports = sortedUniq([1, 1, 2])
// => [1, 2]
