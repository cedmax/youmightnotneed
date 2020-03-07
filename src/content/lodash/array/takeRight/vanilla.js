const takeRight = (arr, qty = 1) => [...arr].splice(-qty, qty)

exports.default = takeRight([1, 2, 3])
// => [3]

exports.two = takeRight([1, 2, 3], 2)
// => [2, 3]

exports.all = takeRight([1, 2, 3], 5)
// => [1, 2, 3]

exports.none = takeRight([1, 2, 3], 0)
// => []
