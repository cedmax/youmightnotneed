const take = (arr, qty = 1) => [...arr].splice(0, qty)

exports.default = take([1, 2, 3])
// => [1]

exports.two = take([1, 2, 3], 2)
// => [1, 2]

exports.all = take([1, 2, 3], 5)
// => [1, 2, 3]

exports.none = take([1, 2, 3], 0)
// => []
