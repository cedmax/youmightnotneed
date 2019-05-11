const dropRight = (arr, n = 1) => (n && arr.slice(0, -n)) || arr

exports.simple = dropRight([1, 2, 3])
// => [1, 2]

exports.withNumber = dropRight([1, 2, 3], 2)
// => [1]

exports.withNumberVariant = dropRight([1, 2, 3], 5)
// => []

exports.withZero = dropRight([1, 2, 3], 0)
// => [1, 2, 3]
