const lte = (a, b) => a <= b

exports.default = lte(1, 3)
// => true

exports.equal = lte(3, 3)
// => false

exports.flase = lte(3, 1)
// => false
