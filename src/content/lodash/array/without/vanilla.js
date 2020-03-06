const without = (arr, ...args) => arr.filter(item => !args.includes(item))

const array = [2, 1, 2, 3]

exports.return = without(array, 1, 2)
// => [3]

exports.array = array
// => [2, 1, 2, 3]
