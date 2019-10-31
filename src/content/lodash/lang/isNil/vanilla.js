const isNil = val => val == null

exports.nullVal = isNil(null)
// => true

exports.undefVal = isNil(undefined)
// => true

exports.nanVal = isNil(NaN)
// => false
