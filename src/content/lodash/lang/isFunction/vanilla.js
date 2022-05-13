const isFunction = val => typeof val === 'function'

exports.func = isFunction(function () {})
// => true

exports.arrowFunc = isFunction(() => {})
// => true

exports.class = isFunction(class NotAFunction {})
// => false

exports.reg = isFunction(/abc/)
// => false
