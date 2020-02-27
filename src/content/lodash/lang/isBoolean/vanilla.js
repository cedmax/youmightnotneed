const isBoolean = arg => arg === !!arg

exports.true = isBoolean(false)
// => true

exports.false = isBoolean(null)
// => false
