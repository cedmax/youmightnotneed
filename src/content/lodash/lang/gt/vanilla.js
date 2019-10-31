const gt = (a, b) => a > b

exports.greaterThan = gt(3, 1)
// => true

exports.equalTo = gt(3, 3)
// => false

exports.lessThan = gt(1, 3)
// => false
