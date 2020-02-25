const nth = (arr, idx) => arr[idx <= 0 ? arr.length + idx : idx]

const array = ['a', 'b', 'c', 'd']

exports.simple = nth(array, 1)
// => 'b'

exports.negative = nth(array, -2)
// => 'c';
