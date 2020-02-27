const isObject = a => a instanceof Object

exports.object = isObject({})
// => true

exports.array = isObject([1, 2, 3])
// => true

exports.funct = isObject(() => {})
// => true

exports.null = isObject(null)
// => false
