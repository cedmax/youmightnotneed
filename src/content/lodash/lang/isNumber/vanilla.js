const isNumber = a => typeof a === 'number'

exports.number = isNumber(3)
// => true

exports.minValue = isNumber(Number.MIN_VALUE)
// => true

exports.infinity = isNumber(Infinity)
// => true

exports.string = isNumber('3')
// => false
