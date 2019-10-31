const isUndefined = val => val === undefined

exports.undefVal = isUndefined(undefined)
// => true

exports.nullVal = isUndefined(null)
// => false
