exports.array = [1, 2, 3].fill('a')
// => ['a', 'a', 'a']

exports.arrayConstructor = Array(3).fill(2)
// => [2, 2, 2]

exports.partial = [4, 6, 8, 10].fill('*', 1, 3)
// => [4, '*', '*', 10]
