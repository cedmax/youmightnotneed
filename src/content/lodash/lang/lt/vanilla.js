const lt = (a, b) => a < b

exports.default = lt(1, 3)
// => true

exports.equal = lt(3, 3)
// => false

exports.flase = lt(3, 1)
// => false
