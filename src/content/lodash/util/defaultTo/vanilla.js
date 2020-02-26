const defaultTo = (a, b) => (a == null || Object.is(a, NaN) ? b : a)

exports.default = defaultTo(1, 10)
// => 1

exports.falsy = defaultTo('', 10)
// => ''

exports.undefined = defaultTo(undefined, 10)
exports.null = defaultTo(null, 10)
exports.nan = defaultTo(NaN, 10)
// => 10
