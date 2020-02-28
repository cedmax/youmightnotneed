const nth = (arr, idx) => arr.slice(idx, idx + 1)[0]

const array = ['a', 'b', 'c', 'd']

exports.simple = nth(array, 1)
// => 'b'

exports.negative = nth(array, -2)
// => 'c';
