// Native
var array = [1, 2, 3]
array.fill('a')
// => ['a', 'a', 'a']

Array(3).fill(2)
// => [2, 2, 2]

[4, 6, 8, 10].fill('*', 1, 3)
// => [4, '*', '*', 10]