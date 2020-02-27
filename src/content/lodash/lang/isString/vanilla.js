const isString = a => typeof a === 'string'

exports.string = isString('abc')
// => true

exports.notString = isString(1)
// => false
