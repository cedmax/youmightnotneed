const isNull = val => val === null

exports.nullVal = isNull(null)
// => true

exports.undefVal = isNull(undefined)
// => false
