exports.integer = Number.isInteger(3)
// => true

exports.lowerBound = Number.isInteger(Number.MIN_VALUE)
// => false

exports.infinite = Number.isInteger(Infinity)
// => false

exports.stringNumber = Number.isInteger('3')
// => false
