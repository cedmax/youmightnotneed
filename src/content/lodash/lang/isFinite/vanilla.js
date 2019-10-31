exports.integer = Number.isFinite(3)
// => true

exports.lowerBound = Number.isFinite(Number.MIN_VALUE)
// => true

exports.infinite = Number.isFinite(Infinity)
// => false

exports.stringNumber = Number.isFinite('3')
// => false
