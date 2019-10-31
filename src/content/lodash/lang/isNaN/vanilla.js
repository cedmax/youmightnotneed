exports.NaN = Number.isNaN(NaN)
// => true

exports.NumberNaN = Number.isNaN(Number(NaN))
// => true

exports.undef = Number.isNaN(undefined)
// => false
