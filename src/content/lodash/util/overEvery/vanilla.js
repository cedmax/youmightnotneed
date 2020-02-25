const overSome = checks => item => checks.every(check => check(item))

const func = overSome([Boolean, isFinite])

exports.string = func('1')
// => true

exports.null = func(null)
// => false

exports.nan = func(NaN)
// => false
